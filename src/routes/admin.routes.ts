import { Router } from 'express';
import { getAllUsers, deleteUser } from '../controllers/admin.controller';
import { authenticateToken, authorizeRole } from '../middleware/auth.middleware';
import { Role } from '@prisma/client';

const router = Router();

// Protect all admin routes with authentication and admin role
router.use(authenticateToken, authorizeRole([Role.ADMIN]));

// Admin routes
router.get('/users', getAllUsers);
router.delete('/users/:userId', deleteUser);

export default router; 