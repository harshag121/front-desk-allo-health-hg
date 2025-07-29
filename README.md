# Front Desk System

This repository contains a minimal skeleton for a clinic front desk system. It uses a NestJS backend with SQLite and a Next.js frontend styled with Tailwind CSS.

## Folder Structure

- **backend** – NestJS application with entities and simple controllers for doctors, appointments and queue management.
- **frontend** – Next.js project containing pages for queue management and appointments.

## Running Locally

Install dependencies in the project root and run the servers locally:

```bash
# install all deps
npm install

# seed database with sample data
npm run seed

# start backend
npm start

# install frontend deps
cd frontend
npm install
npm run dev
```

The backend listens on `http://localhost:3001` and the Next.js frontend on `http://localhost:3000`.

### Seeding Data

Run the included seed script to populate the SQLite database with sample doctors, patients and an appointment:

```bash
npx ts-node backend/src/seed.ts
```

### Deployment

The project can be deployed to Azure App Service. Build the frontend with `next build` and serve the compiled backend. Persist the `clinic.db` SQLite file by mounting Azure storage or using the built‑in filesystem for single-instance deployments.

### Basic cURL Test

After starting the backend you can verify it is up using cURL:

```bash
curl http://localhost:3001/doctors
```
