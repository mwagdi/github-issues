import { commentsLoaded } from '../comments';

test('should setup comments loaded action object', () => {
    const action = commentsLoaded([{ body: "Lorem ipsum" }, { body: "Lorem ipsum2" }]);
    expect(action).toEqual({
        type: "COMMENTS_LOADED",
        comments: [{ body: "Lorem ipsum" }, { body: "Lorem ipsum2" }]
    });
});
