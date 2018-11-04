import { getIssues,issuesLoaded } from '../issues';

test('should setup issues loaded action object', () => {
    const action = issuesLoaded([{ body: "Lorem ipsum" },{ body: "Lorem ipsum2" }]);
    expect(action).toEqual({
        type: "ISSUES_LOADED",
        issues: [{ body: "Lorem ipsum" }, { body: "Lorem ipsum2" }]
    });
});
