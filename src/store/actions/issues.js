import axios from 'axios';

import { ISSUES_LOADED } from '../types';
import { API } from '../../constants';

export const issuesLoaded = issues => {
    return{
        type: ISSUES_LOADED,
        issues
    }
}

export const getIssues = (page=1,state="open") => {
    return dispatch => {
        axios.get(`${API}?page=${page}&state=${state}`)
        .then(response => dispatch(issuesLoaded(response.data)))
        .catch(error => {
            throw(error);
        });
    }
}