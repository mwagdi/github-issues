import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SingleIssue from '../SingleIssue';

test('SingleIssue renders correctly', () => {
    const match = {
        params: {
            number: 3
        }
    }
    const store = {
        getState: () => ({
            comments: [],
        }),
        dispatch: () => { },
        subscribe: () => { },
    };
    const wrapper = shallow(<SingleIssue match={match} store={store} />).dive();
    expect(toJSON(wrapper)).toMatchSnapshot();
})
