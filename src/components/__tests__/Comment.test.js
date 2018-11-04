import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Comment from '../Comment';

test('Comment renders correctly', () => {
    const comment = {
        user: {
            avatar_url: "url"
        }
    }
    const wrapper = shallow(<Comment comment={comment} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
