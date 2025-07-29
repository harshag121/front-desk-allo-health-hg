# Front Desk System

This repository contains a minimal skeleton for a clinic front desk system. It uses a NestJS backend with SQLite and a Next.js frontend styled with Tailwind CSS.

## Folder Structure

- **backend** – NestJS application with entities and simple controllers for doctors, appointments and queue management.
- **frontend** – Next.js project containing pages for queue management and appointments.

## Running Locally

Dependencies are not included due to environment restrictions. Install packages and run the servers locally:

```bash
# install backend deps
npm install @nestjs/core @nestjs/common @nestjs/platform-express @nestjs/typeorm typeorm reflect-metadata sqlite3 rxjs @nestjs/config

# start backend
npx ts-node backend/src/main.ts

# install frontend deps
cd frontend
npm install next react react-dom node-fetch tailwindcss
npm run dev
```

The backend listens on `http://localhost:3001` and the Next.js frontend on `http://localhost:3000`.

### Seeding Data

Run the included seed script to populate the SQLite database with sample doctors, patients and an appointment:

```bash
npx ts-node backend/src/seed.ts
```

### Deployment

The project is ready to deploy to services like Azure App Service. Build the frontend and start the backend as part of your startup command. Ensure the `clinic.db` SQLite file is persisted.
