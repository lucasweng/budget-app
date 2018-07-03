import {
  login,
  logout,
  startGoogleLogin,
  startFacebookLogin
} from '../../actions/auth';

test('should setup login action object', () => {
  const uid = 'asdfghjkl';
  const firstname = 'Casey';
  const action = login(uid, firstname);
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
    firstname
  });
});

test('should setup startGoogleLogin action', () => {
  const action = startGoogleLogin();
  expect(action).toBeDefined();
});

test('should setup startFacebookLogin action', () => {
  const action = startFacebookLogin();
  expect(action).toBeDefined();
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
