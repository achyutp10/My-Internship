import axios from "axios";

// Action creator for user registration
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_REGISTER_REQUEST' });

  try {
    const response = await axios.post('/api/users/register', user);
    console.log(response);
    dispatch({ type: 'USER_REGISTER_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'USER_REGISTER_FAILED', payload: error });
  }
};

// Action creator for user login
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN_REQUEST' });

  try {
    const response = await axios.post('/api/users/login', user);
    console.log(response);
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
    localStorage.setItem('currentUser', JSON.stringify(response.data))
    window.location.href = '/'
  } catch (error) {
    dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
  }
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('currentUser')
  window.location.href = '/login'
}
