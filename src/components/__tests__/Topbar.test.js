import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Topbar from '../Topbar';


test('Topbar renders correctly', () => {
    const wrapper = shallow(<Topbar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})