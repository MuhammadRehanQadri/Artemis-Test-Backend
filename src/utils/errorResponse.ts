import { Response } from 'express';

export const errorResponse = (res: Response, statusCode: number, message: string) => {
    return res.status(statusCode).json({ error: message });
};