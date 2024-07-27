import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_MENTORS_REQUEST,
  FETCH_MENTORS_SUCCESS,
  FETCH_MENTORS_FAILURE,
  FETCH_MENTEES_REQUEST,
  FETCH_MENTEES_SUCCESS,
  FETCH_MENTEES_FAILURE,
} from './actionTypes';
import axios from 'axios';

// Auth actions
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
export const logout = () => ({ type: LOGOUT });

export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/api/login', credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};

// User actions
export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, payload: user });
export const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, payload: error });

export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const response = await axios.get('/api/user');
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.response.data));
  }
};

// Mentor actions
export const fetchMentorsRequest = () => ({ type: FETCH_MENTORS_REQUEST });
export const fetchMentorsSuccess = (mentors) => ({ type: FETCH_MENTORS_SUCCESS, payload: mentors });
export const fetchMentorsFailure = (error) => ({ type: FETCH_MENTORS_FAILURE, payload: error });

export const fetchMentors = () => async (dispatch) => {
  dispatch(fetchMentorsRequest());
  try {
    const response = await axios.get('/api/mentors');
    dispatch(fetchMentorsSuccess(response.data));
  } catch (error) {
    dispatch(fetchMentorsFailure(error.response.data));
  }
};

// Mentee actions
export const fetchMenteesRequest = () => ({ type: FETCH_MENTEES_REQUEST });
export const fetchMenteesSuccess = (mentees) => ({ type: FETCH_MENTEES_SUCCESS, payload: mentees });
export const fetchMenteesFailure = (error) => ({ type: FETCH_MENTEES_FAILURE, payload: error });

export const fetchMentees = () => async (dispatch) => {
  dispatch(fetchMenteesRequest());
  try {
    const response = await axios.get('/api/mentees');
    dispatch(fetchMenteesSuccess(response.data));
  } catch (error) {
    dispatch(fetchMenteesFailure(error.response.data));
  }
};