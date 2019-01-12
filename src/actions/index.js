import firebase, { auth, provider } from 'fire';
import { v4 } from 'uuid';
import { 
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  CREATE_DECK_START,
  CREATE_DECK_SUCCESS
} from 'actions/actionTypes';


const signInStart = () => ({
  type: SIGN_IN_START
});

export const signInSuccess = ( user ) => ({
  type: SIGN_IN_SUCCESS,
  user
});

const signInFailure = ( error ) => ({
  type: SIGN_IN_FAILURE,
  error
});

export const signIn = () => dispatch => {
  dispatch( signInStart() );

  auth.signInWithPopup( provider )
    .then( result => {
      const user = result.user;
      console.log( user );
      dispatch( signInSuccess( user ) );
    })
    .catch( error => {
      dispatch( signInFailure( error ) );
    })

};

const signOutStart = () => ({
  type: SIGN_OUT_START
});

const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOut = () => dispatch => {
  dispatch( signOutStart() );
  auth.signOut()
    .then( () => {
      dispatch( signOutSuccess() );
    });
}

const createDeckStart = () => ({
  type: CREATE_DECK_START
});

export const createDeck = ( name, description ) => dispatch => {
  dispatch( createDeckStart() );
  const database = firebase.database();
  const id = v4();
  database.ref(`decks/${ id }`).set({
    name,
    description,
    id
  });

}