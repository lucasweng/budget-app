import handleAuthError from '../../actions/handleAuthError';

test('should console warn the error message', () => {
  const e = new Error();
  const spy = jest.spyOn(global.console, 'warn');
  handleAuthError(e);
  expect(spy).toHaveBeenCalled();
});
