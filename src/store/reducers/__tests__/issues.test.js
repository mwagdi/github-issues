import { issuesReducer } from '../issues';
import { ISSUES_LOADED } from '../../types';

describe('Issues reducer', () => {
    it('should return the initial state', () => {
        expect(issuesReducer(undefined, {})).toEqual([]);
    });
    it('should handle ISSUES_LOADED', () => {
        expect(issuesReducer(undefined, {
            type: ISSUES_LOADED,
            issues: [
                {
                    number: 3,
                    id: 1
                },
                {
                    number: 4,
                    id: 2
                }
            ]
        })).toEqual([
            {
                number: 3,
                id: 1
            },
            {
                number: 4,
                id: 2
            }
        ]);
    });
});