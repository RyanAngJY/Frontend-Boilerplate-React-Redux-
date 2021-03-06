import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES } from "../actionTypes";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const fetchMessages = () => {
  return dispatch => {
    return apiCall("GET", "/api/todos")
      .then(res => {
        console.log(res);
        dispatch(loadMessages(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};
