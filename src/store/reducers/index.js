import { combineReducers } from 'redux';

import { issuesReducer } from './issues';
import { commentsReducer } from './comments';

export default combineReducers({
    issues: issuesReducer,
    comments: commentsReducer
})