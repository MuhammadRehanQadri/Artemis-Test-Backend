import Block, {IBlockItem} from '../models/block';

export const createBlock = async (blocks: IBlockItem[]) => {
    console.log('blocks', blocks)
    const newBlocks = await Block.insertMany(blocks);
    return newBlocks;
};

export const getBlocks = async () => {
    return Block.find();
};

export const deleteAllBlocks = async () => {
    return Block.deleteMany({});
};