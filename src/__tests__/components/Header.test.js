import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header onLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call onLogout on button click', () => {
  const onLogoutSpy = jest.fn();
  const wrapper = shallow(<Header onLogout={onLogoutSpy} />);
  wrapper.find('button').simulate('click');
  expect(onLogoutSpy).toHaveBeenCalled();
});
