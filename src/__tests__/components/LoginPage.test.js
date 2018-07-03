import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('sould render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const onGoogleLoginSpy = jest.fn();
  const onFacebookLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage
    onGoogleLogin={onGoogleLoginSpy}
    onFacebookLogin={onFacebookLoginSpy}
  />);
  wrapper.find('button').at(0).simulate('click');
  expect(onGoogleLoginSpy).toHaveBeenCalled();
  wrapper.find('button').at(1).simulate('click');
  expect(onFacebookLoginSpy).toHaveBeenCalled();
});
