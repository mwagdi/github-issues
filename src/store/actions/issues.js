import axios from 'axios';

import { ISSUES_LOADED } from '../types';
import { API } from '../../constants';

export const issuesLoaded = issues => {
    return{
        type: ISSUES_LOADED,
        issues
    }
}

export const getIssues = (page=1) => {
    return dispatch => {
        axios.get(`${API}?page=${page}`)
        .then(response => dispatch(issuesLoaded(response.data)))
        .catch(error => {
            throw(error);
        });
    }
}