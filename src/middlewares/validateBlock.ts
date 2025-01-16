import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction, RequestHandler } from 'express';

export const validateBlock: RequestHandler[] = [
    body().isArray().withMessage('Input should be an array'),
    body('*.title').notEmpty().withMessage('Title is required'),
    body('*.description').optional().isString().withMessage('Description must be a string'),
    body('*.type').notEmpty().withMessage('Type is required'),
    body('*.icon').notEmpty().withMessage('Icon is required'),
    body('*.selected').isBoolean().withMessage('Selected must be a boolean'),
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        next();
    }
];