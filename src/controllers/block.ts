import { Request, Response } from 'express';
import {createBlock, deleteAllBlocks, getBlocks} from '../services/block';
import { errorResponse } from '../utils/errorResponse';

export const addBlock = async (req: Request, res: Response): Promise<void> => {
    const { blocks } = req.body;
    console.log('req.body', req.body)

    try {
        await deleteAllBlocks();
        const newBlock = await createBlock(blocks);
        res.status(201).json(newBlock);
    } catch (error) {
        console.log('ERR', error)
        console.log('ERR', JSON.stringify(error))

        errorResponse(res, 500, 'Server error');
    }
};

export const getAllBlocks = async (req: Request, res: Response): Promise<void> => {
    try {
        const blocks = await getBlocks();
        res.status(200).json(blocks);
    } catch (error) {
        errorResponse(res, 500, 'Server error');
    }
};