import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export const validate = (schema: AnyZodObject) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await schema.parseAsync(req.body);
        next();
    } catch (error: any) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: error.errors
        });
    }
}; 