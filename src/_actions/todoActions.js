import firebase from 'firebase';
import types from './types';

export const todoCreate = (description, callback) => {

	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/todos`)
		.push({ description })
		.then(() => { 
			dispatch({ type: types.TODO_CREATE })
			callback && callback();
		});
	}	
};

//get list from firebase
export const todosFetch = (callback) => {
	
	const { currentUser } = firebase.auth();

	return(dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/todos`)
			.on('value',snapshot => {
				dispatch({ type: types.TODO_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const taskDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
      .remove()
      .then(() => {
        //dispatch({ type: types.TODO_DELETE })
		//callback && callback();
      });
  };
};