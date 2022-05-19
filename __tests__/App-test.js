import React from 'react';
import {shallow, configure} from 'enzyme';
import Input from '../src/components/Input';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Testing ReassignLocationMenu component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Input label={'Test label 1'} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({label: 'Test label 2'});
    expect(wrapper).toMatchSnapshot();
  });
});
