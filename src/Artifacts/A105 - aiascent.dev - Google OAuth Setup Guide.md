# Artifact A105: aiascent.dev - Google OAuth Setup Guide
# Date Created: C107
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A guide for setting up Google OAuth credentials for the `aiascent.dev` user account system.
- **Tags:** v2v, academy, guide, setup, authentication, oauth, google

## 1. Purpose

This guide provides a step-by-step process to create Google OAuth 2.0 Client credentials, which are required for the "Sign in with Google" feature on `aiascent.dev`. This is an adaptation of the guide from `A138`.

## 2. Root Cause of Mismatch Errors

The most common error (`redirect_uri_mismatch`) occurs because the redirect URI your application sends to Google must **exactly match** one of the URIs you have authorized in the Google Cloud Console. For this project, we will need to authorize URIs for both local development and the final production deployment.

## 3. Step-by-Step Fix

### 3.1. Navigate to the Google Cloud Console

1.  Go to the Google Cloud Console: [https://console.cloud.google.com/](https://console.cloud.google.com/)
2.  Log in with your Google account.
3.  From the project selection dropdown, select the project you want to use or create a new one (e.g., "aiascent-dev").

### 3.2. Locate or Create Your OAuth Client ID

1.  Open the navigation menu (☰) and navigate to **APIs & Services > Credentials**.
2.  Click **"+ CREATE CREDENTIALS"** at the top and select **"OAuth client ID"**.
3.  **Application type:** Select **"Web application"**.
4.  **Name:** Give it a descriptive name, like "AIAscent.dev Web Client".

### 3.3. Add Authorized URIs

This is the most critical step.

1.  Under **"Authorized JavaScript origins"**, click **"+ ADD URI"** and add the following:
    *   `http://localhost:3000` (for local development)
    *   `https://aiascent.dev` (for production)

2.  Under **"Authorized redirect URIs"**, click **"+ ADD URI"** and add the following two URIs **exactly**:
    *   `http://localhost:3000/api/auth/callback/google`
    *   `https://aiascent.dev/api/auth/callback/google`

### 3.4. Create and Save Credentials

1.  Click the **"CREATE"** button.
2.  A dialog will appear showing your **Client ID** and **Client Secret**. Copy both of these values.

### 3.5. Configure Environment Variables

1.  In your `aiascent-dev` project, open your `.env` (or `.env.local` for development) file.
2.  Add the credentials you just copied:
    ```
    GOOGLE_CLIENT_ID=your-client-id-from-google
    GOOGLE_CLIENT_SECRET=your-client-secret-from-google
    ```
3.  You will also need to add a `NEXTAUTH_SECRET`, which can be any randomly generated string. You can use an online generator or run `openssl rand -base64 32` in your terminal.
    ```
    NEXTAUTH_SECRET=your-randomly-generated-secret-string
    ```

After saving the `.env` file, restart your development server. The Google Sign-In flow should now work correctly in your local environment.