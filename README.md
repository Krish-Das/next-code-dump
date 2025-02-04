# Authentication with Better-Auth, Upstash Redis, and NeonDB

This repository explores how to implement authentication using
[Better-Auth](https://www.better-auth.com/),
[Upstash Redis](https://upstash.com/), and [NeonDB](https://neon.tech/).

## Features

- **Email-password authentication**: Fully implemented and functional.
- **OAuth support**: Currently not implemented, but easy to add.

---

## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone -b practice/betterauth-upstash-neon --single-branch https://github.com/Krish-Das/next-code-dump.git && cd next-code-dump
```

### 2. Set Up Environment Variables

This project uses the following services:

- **Better-Auth**: For authentication.
- **NeonDB**: To store user data.
- **Upstash Redis**: As a secondary storage for session management.

Refer to the
[example `.env` file](https://github.com/Krish-Das/next-code-dump/blob/practice/betterauth-upstash-neon/example.env)
for guidance. Set up your environment variables as follows:

#### a. Define the Public Base URL

For local development, use the following command to set your base URL:

```bash
echo "NEXT_PUBLIC_URL=http://localhost:3000" >> .env
```

Make sure to update this in production with your deployed URL.

#### b. Generate and Add the Better-Auth Secret

Use the command below to generate a secret key and add it to your `.env` file:

```bash
echo "BETTER_AUTH_SECRET=$(openssl rand -hex 16)" >> .env
```

#### c. Add NeonDB and Upstash Redis Variables

Add your NeonDB and Upstash credentials to the `.env` file:

```bash
# Neon Database URL
DRIZZLE_DATABASE_URL=<your_neon_database_url>

# Upstash Redis URL and Token
UPSTASH_REDIS_REST_URL=<your_upstash_redis_url>
UPSTASH_REDIS_REST_TOKEN=<your_upstash_redis_token>
```

### 3. Install Dependencies and Start the Server

Run the following command to install dependencies and start the development
server:

```bash
npm install && npm run dev
```

The server will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Notes

- Email-password authentication is the only method implemented. Adding OAuth
  providers can be done by extending the Better-Auth configuration.
- Ensure your environment variables are configured correctly to avoid runtime
  issues.
