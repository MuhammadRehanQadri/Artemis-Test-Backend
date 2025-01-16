import express from 'express';
import { validateBlock } from '../middlewares/validateBlock';
import {addBlock, getAllBlocks} from '../controllers/block';

const router = express.Router();

router.post('/block', addBlock);
router.get('/blocks', getAllBlocks);

export default router;