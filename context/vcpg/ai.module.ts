import { Module, forwardRef } from '@nestjs/common';
import { AiGateway } from './ai.gateway';
import { AiService } from './ai.service';
import { ScenariosModule } from '../scenarios/scenarios.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { SynchronizationModule } from 'src/synchronization/synchronization.module';

@Module({
  imports: [
    forwardRef(() => ScenariosModule),
    UsersModule,
    forwardRef(() => SynchronizationModule),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '24h' },
      }),
    }),
  ],
  providers: [AiGateway, AiService],
  exports: [AiService], // Export AiService
})
export class AiModule {}