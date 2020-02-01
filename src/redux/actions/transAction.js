/** @format */

import { GET_USERS } from "../actions/type";
import axios from "axios";

export const getUsers = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response.data);
      dispatch({ type: GET_USERS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};
