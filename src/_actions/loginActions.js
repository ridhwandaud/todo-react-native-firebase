import firebase from 'react-native-firebase';
import types from './types';

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  });
};

export const checkUserLogin = (callback, callbackError) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_USER });
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        loginUserSuccess(dispatch, user);
        callback && callback();
      } else {
        dispatch({ type: types.LOGIN_USER_FAIL });
        callbackError && callbackError();
      }
    });
  };
};

export const loginUser = ({ email, password }, callback, callbackError) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
        callback && callback();
      })
      .catch(error => {
        dispatch({ type: types.LOGIN_USER_FAIL });
        callbackError && callbackError(error);
      });
  };
};

export const signupUser = ({ email,password,fullname }, callback, callbackError) => {
  return (dispatch) => {
    dispatch({ type: types.SIGNUP_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
        callback && callback();
      })
      .catch((error)=>{
        dispatch({ type: types.LOGIN_USER_FAIL });
        callbackError && callbackError(error);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    firebase.auth().signOut();
    dispatch({ type: types.LOGOUT_USER });
  };
};

