import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Footer from '../Footer';

test('Footer renders correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
