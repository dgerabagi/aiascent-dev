import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, UseGuards } from '@nestjs/common';
import { WsJwtGuard } from '../auth/guards/ws-jwt.guard';
import { AiService } from './ai.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/ai',
})
export class AiGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(AiGateway.name);

  constructor(
    private aiService: AiService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token;
      if (!token) throw new Error('No token provided for AI gateway');

      const payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
      const user = await this.usersService.findById(payload.sub);
      if (!user) throw new Error('User not found for AI gateway');

      client.data.user = user;
      client.data.isCancelled = false;
      this.logger.log(`AI client connected: ${client.id} - User: ${user.name}`);
      
      // Send a welcome message
      this.aiService.sendWelcomeMessage(client);

    } catch (e) {
      this.logger.error(`Authentication failed for AI client ${client.id}: ${e.message}`);
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`AI client disconnected: ${client.id}`);
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('askJane')
  async handleAskJane(
    @MessageBody() data: { query: string; instanceId: string },
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const userId = client.data.user.id;
    client.data.isCancelled = false; // Reset cancellation flag
    this.logger.log(`Received query from ${userId} for instance ${data.instanceId}: "${data.query}"`);

    try {
      await this.aiService.getStreamingCompletion(client, data.query, data.instanceId, userId, (chunk) => {
        client.emit('jane:stream', { chunk });
      });
      client.emit('jane:stream_end');
    } catch (error) {
        if (error.message !== 'Stream cancelled') {
            this.logger.error(`Error processing JANE query for user ${userId}:`, error);
            client.emit('jane:error', { message: 'An error occurred while processing your request.' });
        }
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('jane:cancel')
  handleCancelStream(@ConnectedSocket() client: Socket) {
      this.logger.log(`Received cancel request from client ${client.id}`);
      client.data.isCancelled = true;
  }
}