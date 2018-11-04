import axios from 'axios';

import { COMMENTS_LOADED } from '../types';

export const commentsLoaded = comments => {
    return {
        type: COMMENTS_LOADED,
        comments
    }
}

export const getComments = url => {
    return dispatch => {
        axios.get(url)
        .then(response => dispatch(commentsLoaded(response.data)))
        .catch(error => {
            throw(error);
        })
    }
}