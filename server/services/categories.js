import Category from '../models/Category.js';

export const AllCategories = async () => {
    try {
        console.log('hit');
        const cursor = await Category.find({});
        return cursor
    } catch (error) {
        return error
    }
        
}

export default {AllCategories}