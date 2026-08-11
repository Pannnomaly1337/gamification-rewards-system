# Gamification Rewards System

A full-stack gamification system built with **Next.js · NestJS · Prisma · PostgreSQL**.
It demonstrates a complete game loop: **play → earn score → claim rewards → view history → reset.**

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
</p>

🔗 **Live Demo:** _add your Vercel URL here after deploying_

> Note: the demo is hosted on free tiers (Render + Neon), so the first request after a period of inactivity may take ~30–60s to wake up.

---

## ✨ Features

- 🎮 Play a game to earn random scores
- 📈 Accumulate a total score (0–10,000)
- 🏆 Claim rewards at score checkpoints (5,000 / 7,500 / 10,000)
- 🕓 View play history & reward history
- 🔄 Reset the game

The project simulates real-world frontend–backend interaction, including database schema design, migrations, API design, and deployment.

---

## 🛠️ Tech Stack

**Frontend:** Next.js (App Router) · React · TypeScript
**Backend:** NestJS · Prisma ORM
**Database:** PostgreSQL (Neon)
**Deployment:** Vercel (frontend) · Render (backend) · Neon (database)

---

## 🏗️ Architecture

```
Frontend (Next.js)  →  HTTP (fetch)  →  Backend (NestJS)  →  Prisma ORM  →  PostgreSQL
```

---

## 🚀 Getting Started (Run Locally)

### 1. Clone the repository
```bash
git clone https://github.com/Pannnomaly1337/gamification-rewards-system.git
cd gamification-rewards-system
```

### 2. Backend setup
```bash
cd backend
npm install
```
Create a `backend/.env` file with your PostgreSQL connection string:
```
DATABASE_URL="postgresql://<user>:<password>@<host>.neon.tech/<db>?sslmode=require"
```
Run the migration and seed the reward checkpoints:
```bash
npx prisma migrate dev
npm run seed
```
Start the backend (runs at http://localhost:3000):
```bash
npm run start:dev
```

### 3. Frontend setup
Open a new terminal:
```bash
cd frontend
npm install
```
Create a `frontend/.env` file:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```
Start the frontend (runs at http://localhost:3001):
```bash
npm run dev
```

You're ready — play, earn score, claim rewards, view history, and reset. 🎉

---

## 📡 API Endpoints

| Method | Endpoint              | Description               |
| ------ | --------------------- | ------------------------- |
| GET    | `/user/summary`       | Get score & reward status |
| POST   | `/game/play`          | Play once, earn a score   |
| GET    | `/game/history`       | Play history              |
| POST   | `/reset`              | Reset the game            |
| POST   | `/reward/claim/:id`   | Claim a reward            |
| GET    | `/reward/history`     | Reward history            |

> The backend auto-creates a single demo user, and the reset endpoint is provided for easy testing.

---

## ☁️ Deployment

- **Database:** Neon PostgreSQL (persistent free tier) — set `DATABASE_URL`
- **Backend:** Render web service — build with `npm install && npx prisma generate && npx prisma migrate deploy && npm run seed && npm run build`, start with `npm run start:prod`, and set `DATABASE_URL` + `FRONTEND_URL`
- **Frontend:** Vercel — set `NEXT_PUBLIC_API_URL` to the backend URL

---

## 👤 Author

**Supawith Jangtrakul (Pann)** — [Portfolio](https://supawith-portfolio.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/supawith-jangtrakul-8920173a4/)