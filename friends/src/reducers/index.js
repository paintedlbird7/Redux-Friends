import {
  USER_UNAUTHORIZED,
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  EDIT_FRIEND_START,
  EDIT_FRIEND_SUCCESS,
  EDIT_FRIEND_FAILURE
} from '../actions';

const initialState = {
  addingFriend: false,
  friends: [],
  loggingIn: false,
  deletingFriend: false,
  editingFriend: false,
  error: '',
  errorStatusCode: null,
  fetchingFriends: false,
  token: localStorage.getItem('token')
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: null,
        fetchingFriends: false,
        friends: action.payload
      };
    case DELETE_START:
      return {
        ...state,
        deletingFriend: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        error: '',
        errorStatusCode: null,
        friends: action.payload
      };
    case USER_UNAUTHORIZED:
      console.log(action);
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingFriends: false
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        addingFriend: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        addingFriend: false,
        error: '',
        errorStatusCode: null,
        friends: action.payload
      };
    case EDIT_FRIEND_START:
      return {
        ...state,
        editingFriend: true
      };
    case EDIT_FRIEND_SUCCESS:
      return {
        ...state,
        editingFriend: false,
        error: '',
        errorStatusCode: null,
        friends: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
