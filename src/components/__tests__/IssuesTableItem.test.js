import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import IssuesTableItem from '../IssuesTableItem';


test('IssuesTableItem renders correctly', () => {
    const issue = {
        user: {
            login: "johndoe"
        },
        created_at: "10/10/2017"
    }
    const wrapper = shallow(<IssuesTableItem issue={issue} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
