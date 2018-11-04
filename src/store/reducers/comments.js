import { COMMENTS_LOADED } from '../types';

export const commentsReducer = (state=[],action) => {
    switch (action.type) {
        case COMMENTS_LOADED:
            return action.comments;
    
        default:
            return state;
    }
}