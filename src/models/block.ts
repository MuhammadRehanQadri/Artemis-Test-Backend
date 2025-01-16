import { Schema, model, Document } from 'mongoose';

export interface IBlockItem {
    title: string;
    description?: string;
    type: string;
    icon: string;
    selected: boolean;
}

interface IBlock extends Document, IBlockItem {}

const blockSchema = new Schema<IBlock>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true,
        trim: true
    },
    selected: {
        type: Boolean,
        required: true
    }
});

const Block = model<IBlock>('Block', blockSchema);

export default Block;