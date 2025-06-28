# Full Stack Authentication App

A modern, secure authentication system built with TypeScript, featuring a React frontend and Node.js backend.

## Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript
- MySQL with Prisma ORM
- JSON Web Tokens (JWT)
- Zod (for validation)
- CORS
- bcrypt (for password hashing)

### Frontend
- React 18
- TypeScript
- Vite
- Chakra UI
- React Router DOM
- Axios
- Context API for state management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MySQL
- npm or yarn

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Auth-App
```

### 2. Backend Setup

```bash
# Install dependencies
npm install

# Create .env file (see Environment Configuration below)
cp .env.example .env

# Set up the database
npx prisma migrate dev

# Start the development server
npm run dev
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd auth-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:3000`.

## Environment Configuration

### Backend (.env)
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DATABASE_URL="mysql://user:password@localhost:3306/auth_db"

# JWT Configuration
JWT_SECRET=your-super-secret-key-change-in-production

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
```

## Project Structure

```
Auth-App/
├── auth-frontend/          # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/      # React context (Auth)
│   │   └── main.tsx      # Entry point
│   └── package.json
├── prisma/                # Database schema and migrations
├── src/                   # Backend source code
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── routes/           # API routes
│   ├── schemas/          # Validation schemas
│   └── app.ts           # Main application file
└── package.json
```

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- Password hashing
- Input validation
- Error handling
- Responsive UI
- TypeScript type safety

## API Endpoints

- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get user profile (protected)
- `POST /auth/logout` - Logout user

## Security Features

- Password hashing with bcrypt
- JWT for secure authentication
- CORS protection
- Input validation
- HTTP-only cookies
- TypeScript type safety

## Development

```bash
# Run backend in development mode
npm run dev

# Run frontend in development mode
cd auth-frontend && npm run dev
```

## Production

```bash
# Build backend
npm run build

# Build frontend
cd auth-frontend && npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 