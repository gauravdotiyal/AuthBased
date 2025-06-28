# Full Stack Authentication App

A modern authentication system built with Node.js, Express, TypeScript, React, and MySQL.

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- Password hashing and security
- MySQL database with Prisma ORM
- Modern React frontend with Chakra UI
- TypeScript for type safety

## Project Structure

```
Auth-App/
├── auth-frontend/     # React frontend
├── prisma/           # Database schema and migrations
└── src/              # Backend source code
    ├── config/       # Configuration files
    ├── controllers/  # Route controllers
    ├── middleware/   # Custom middleware
    ├── routes/       # API routes
    └── schemas/      # Validation schemas
```

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Auth-App
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd auth-frontend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   PORT=3000
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret
   DATABASE_URL="mysql://user:password@localhost:3306/auth_db"
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development servers:
   ```bash
   # Start backend (from root directory)
   npm run dev

   # Start frontend (from auth-frontend directory)
   npm run dev
   ```

## API Endpoints

- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user info
- `POST /auth/logout` - Logout user

## Frontend Routes

- `/` - Dashboard (protected)
- `/login` - Login page
- `/signup` - Registration page

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 