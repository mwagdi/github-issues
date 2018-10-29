import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import IssuesHeader from '../IssuesHeader';

test('IssuesHeader renders correctly', () => {
  const wrapper = shallow(<IssuesHeader />);
  expect(toJSON(wrapper)).toMatchSnapshot();
})
