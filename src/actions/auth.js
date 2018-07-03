import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';
import { setExpenses } from './expenses';
import handleAuthError from './handleAuthError';

export const login = (uid, firstname) => ({
  type: 'LOGIN',
  uid,
  firstname
});

export const startGoogleLogin = () => {
  // conform to the redux-thunk spec by returning a function
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
      .catch((e) => { handleAuthError(e); });
  };
};

export const startFacebookLogin = () => {
  // conform to the redux-thunk spec by returning a function
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider)
      .catch((e) => { handleAuthError(e); });
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch) => {
    return firebase.auth().signOut()
      // reset the state to the initial state locally
      // prevent a flash of the previous user's data before startSetExpenses takes place
      .then(() => {
        dispatch(setExpenses([]));
      });
  };
};
