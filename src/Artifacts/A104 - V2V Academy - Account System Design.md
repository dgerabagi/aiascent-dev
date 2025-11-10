# Artifact A104: V2V Academy - Account System Design
# Date Created: C107
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** An adaptation of the `aiascent.game` account system, outlining the architecture for user authentication and progress tracking for the V2V Academy on `aiascent.dev`.
- **Tags:** v2v, academy, plan, architecture, authentication, nextauth, prisma, database

## 1. Purpose

This document outlines the architecture and implementation plan for a user account system for the V2V Academy. The primary goal is to provide a simple, secure way for learners to sign in, allowing the platform to track their progress through courses and labs. This system is a prerequisite for building out the monetizable course content.

This plan is a direct adaptation of the successful and robust account system implemented in the `aiascent.game` project (see `A137`).

## 2. Core Requirements & Technology Choice

*   **Simple Onboarding:** Must support Single Sign-On (SSO) with Google to minimize friction.
*   **Integrated UI:** The login flow must feel native to `aiascent.dev`.
*   **Database Integration:** Must connect to a database to persist user data and course progress.
*   **Secure & Standardized:** The implementation will use well-vetted, industry-standard libraries.

### Technology Choice: NextAuth.js + Prisma + Vercel Postgres

*   **NextAuth.js (`Auth.js`):** The standard for authentication in Next.js applications, providing a pre-built Google provider that handles the OAuth 2.0 flow securely.
*   **Prisma:** A modern, type-safe ORM that simplifies database interactions and has an official adapter for NextAuth.js.
*   **Vercel Postgres:** A serverless PostgreSQL database that integrates seamlessly with projects hosted on Vercel, offering a generous free tier suitable for this project's initial needs.

## 3. System Architecture

1.  **Database (Vercel Postgres):** The database will store user information and their progress.
2.  **Prisma Schema (`prisma/schema.prisma`):** A new file defining the data models for `User`, `Account`, `Session`, and a new `UserProgress` table.
3.  **NextAuth.js API Endpoint (`src/app/api/auth/[...nextauth]/route.ts`):** A catch-all API route that handles all authentication requests (signin, callback, session).
4.  **Session Provider (`src/app/layout.tsx`):** The entire application will be wrapped in a session provider to make user data globally available.
5.  **UI Components:**
    *   A `/login` page will be created to prompt users to sign in.
    *   The main `<Header />` will be updated to display the user's status (e.g., profile picture and a "Sign Out" button, or a "Sign In" button).

## 4. Data Schema (`prisma/schema.prisma`)

The schema will include the standard NextAuth.js models, plus a new model for tracking progress.

```prisma
// datasource and generator...

model Account {
  // ... standard NextAuth Account model from A137
}

model Session {
  // ... standard NextAuth Session model from A137
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]

  // New relation for progress tracking
  progress UserProgress[]
}

model VerificationToken {
  // ... standard NextAuth VerificationToken model from A137
}

// New model for V2V Academy
model UserProgress {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  courseId    String   // e.g., 'course-1-report-viewer'
  lessonId    String   // e.g., 'lesson-1.1'
  completedAt DateTime @default(now())

  @@unique([userId, lessonId])
  @@index([userId])
}
```

## 5. Authentication Flow

The flow will be identical to the one described in `A137`, using the Google provider. A user clicking "Sign In" will be redirected to Google, and upon successful authentication, they will be redirected back to `aiascent.dev`, where NextAuth.js will create a user record and a session.

## 6. AI Interaction Logging (Future Phase)

Once the user account system and database are in place, we can implement logging for AI interactions.

*   **New Schema:** A new table, `AiInteractionLog`, will be added to `schema.prisma`.
    ```prisma
    model AiInteractionLog {
      id           String   @id @default(cuid())
      userId       String?  // Can be null for anonymous users
      user         User?    @relation(fields: [userId], references: [id])
      prompt       String   @db.Text
      response     String   @db.Text
      knowledgeBase String
      reportName   String?
      createdAt    DateTime @default(now())
    }
    ```
*   **Backend Update:** The `/api/chat/route.ts` will be modified to save the user's prompt and the final AI response to this new table. If a user is logged in, their `userId` will be associated with the log entry.