export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
});

export const loginSuccess = (user, token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user, token },
});

export const loginFail = (error) => ({
  type: 'LOGIN_FAIL',
  payload: error,
});

export const registerRequest = () => ({
  type: 'REGISTER_REQUEST',
});

export const registerSuccess = (user, token) => ({
  type: 'REGISTER_SUCCESS',
  payload: { user, token },
});

export const registerFail = (error) => ({
  type: 'REGISTER_FAIL',
  payload: error,
});

export const logout = () => ({
  type: 'LOGOUT',
});