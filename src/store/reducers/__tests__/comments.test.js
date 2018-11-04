import { commentsReducer } from '../comments';
import { COMMENTS_LOADED } from '../../types';

describe('Comments reducer', () => {
    it('should return the initial state', () => {
        expect(commentsReducer(undefined, {})).toEqual([]);
    });
    it('should handle COMMENTS_LOADED', () => {
        expect(commentsReducer(undefined, {
            type: COMMENTS_LOADED,
            comments: [
                {
                    body: "lorem ipsum",
                    id: 1
                },
                {
                    body: "lorem ipsum",
                    id: 2
                }
            ]
        })).toEqual([
            {
                body: "lorem ipsum",
                id: 1
            },
            {
                body: "lorem ipsum",
                id: 2
            }
        ]);
    });
});