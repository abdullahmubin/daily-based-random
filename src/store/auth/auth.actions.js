import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.types";

// form
// input feilds => api
// -username/email
// -password

// thunk will help us thus writing two functions
export const loginAPI = (data) => (dispatch) => {

    let fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    dispatch({ type: LOGIN_LOADING });
    data._id  = 123;
    // data.user._id = "123";
    // data.user._email = "a@gmail.com";

    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem("token", JSON.stringify(fakeToken));
    localStorage.setItem("userData", JSON.stringify(data));

    dispatch({ type: LOGIN_LOADING });
    // axios
    //     .post("https://clockify-arshad-pratik-rakesh.herokuapp.com/api/auth/", {
    //         "email": data.email,
    //         "password": data.password
    //     })
    //     .then((r) => {
    //         dispatch({ type: LOGIN_SUCCESS, payload: r.data });
    //         localStorage.setItem("token", JSON.stringify(r.data.data));
    //         localStorage.setItem("userData", JSON.stringify(r.data));

    //     })
    //     .catch(() => {
    //         dispatch({ type: LOGIN_ERROR });
    //     })
}
export const signupAPI = (data) => (dispatch) => {
    console.log('data:', data)
    dispatch({ type: SIGNUP_LOADING });
    axios
        .post("https://clockify-arshad-pratik-rakesh.herokuapp.com/api/users/signup", {
            "email": data.email,
            "password": data.password
        })
        .then((r) => {
            dispatch({ type: SIGNUP_SUCCESS, payload: r.data });
        })
        .catch(() => {
            dispatch({ type: SIGNUP_ERROR });
        })
}

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.setItem("token", null);
};