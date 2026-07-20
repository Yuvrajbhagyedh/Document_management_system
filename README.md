# Schedula — Doctor Appointment Booking System

Backend for **Schedula**, a doctor-appointment booking platform, built as part of the Backend Developer Internship program.

Patients can register, find doctors, and book/reschedule/cancel appointments; doctors can manage their profiles, availability, and appointments.

## Tech Stack

- **Framework:** [NestJS](https://nestjs.com/) (TypeScript)
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **API Testing:** Hoppscotch / Postman
- **Version Control:** Git & GitHub

## Project Status

**Day 1 — Project Setup & ER Diagram** ✅

- NestJS project scaffolded and running locally
- PostgreSQL + TypeORM configured
- ER diagram designed — see [`ER_DIAGRAM.md`](./ER_DIAGRAM.md) / [`docs/ERDiagram.png`](./docs/ERDiagram.png)

## Data Model

The database is designed around six core entities: **User, Patient, Doctor, Slot, Appointment, Notification**.
The full entity-relationship diagram (tables, foreign keys, and relationships) lives in [`ER_DIAGRAM.md`](./ER_DIAGRAM.md).

![Schedula ER Diagram](./docs/ERDiagram.png)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL running locally

### Setup

```bash
# install dependencies
npm install
```

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=schedula
PORT=3000
```

> When deployed (e.g. on Render), the app instead reads a single `DATABASE_URL` if it is present.

### Run

```bash
# development (watch mode)
npm run start:dev

# production
npm run start:prod
```

The app starts on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/            NestJS application source
docs/           ER diagram (image + Mermaid source)
ER_DIAGRAM.md   Entity-relationship documentation
```

## License

For educational / internship use.
