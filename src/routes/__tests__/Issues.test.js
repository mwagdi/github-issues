import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Issues from '../Issues';

const store = configureMockStore([
    thunk,
])();
test('Issues renders correctly',() => {
    const wrapper = shallow(<Issues store={store}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})