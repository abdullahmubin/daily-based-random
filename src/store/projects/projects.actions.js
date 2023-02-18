import * as types from "./projects.types";
import axios from "axios";

const getProjects = () => (dispatch) => {
    let x = JSON.parse(localStorage.getItem("userData"));

    console.log('get Projects');
    console.log(x);

    let id = x._id;
    dispatch({ type:types.GET_PROJECTS , payload: [] })
    // axios
    //     .get(`https://clockify-arshad-pratik-rakesh.herokuapp.com/user/${id}/projects`)
    //     .then((r) => dispatch({ type:types.GET_PROJECTS , payload:r.data }));
}
const addProject = (payload) => (dispatch) => {
    let x = JSON.parse(localStorage.getItem("userData"));
    let id = x._id
    console.log('payload ');
    console.log(payload);
    dispatch({ type:types.ADD_PROJECTS , payload: payload })

    // axios
    //     .post(`https://clockify-arshad-pratik-rakesh.herokuapp.com/user/${id}/projects`,payload)
    //     .then((r) => dispatch({ type:types.ADD_PROJECTS , payload:r.data }));
}
const removeProject = (payload) => (dispatch) => {
    let x = JSON.parse(localStorage.getItem("userData"));
    let id = x._id
    axios
        .delete(`https://clockify-arshad-pratik-rakesh.herokuapp.com/user/${id}/projects/${payload}`)
        .then((r) => dispatch({ type:types.REMOVE_PROJECTS , payload:payload }));
}

export { getProjects, addProject, removeProject }