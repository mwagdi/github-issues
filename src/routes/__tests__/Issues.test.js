import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Issues from '../Issues';

test('Issues renders correctly',() => {
    const wrapper = shallow(<Issues />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})