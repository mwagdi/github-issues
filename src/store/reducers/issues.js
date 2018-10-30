import { ISSUES_LOADED } from '../types';

export const issuesReducer = (state=[],action) => {
    switch (action.type) {
        case ISSUES_LOADED:
            return action.issues;
    
        default:
            return state;
    }
}