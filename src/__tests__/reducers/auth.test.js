import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'asdfghjkl',
    firstname: 'Casey'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
  expect(state.firstname).toBe(action.firstname);
});

test('should clear uid for logout', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state.uid).toBeFalsy();
});
