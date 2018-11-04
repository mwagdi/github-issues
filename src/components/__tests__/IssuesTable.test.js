import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import IssuesTable from '../IssuesTable';

test('IssuesTable renders correctly', () => {
    const store = configureMockStore([])();
    const wrapper = shallow(<IssuesTable store={store} issues={[]} />).dive();
    expect(toJSON(wrapper)).toMatchSnapshot();
})
