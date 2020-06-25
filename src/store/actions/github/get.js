import { actionCreator } from "src/store/actions";
import * as C from "src/constants";
import { github } from "src/helpers";

export const getStart = () => {
  return actionCreator(C.GITHUB_GET_START);
};

export const getSuccess = (data) => {
  return actionCreator(C.GITHUB_GET_SUCCESS, data);
};

export const getFail = (data) => {
  return actionCreator(C.GITHUB_GET_FAIL, data);
};

export const get = () => {
  return (dispatch) => {
    dispatch(getStart);

    github
      .get(C.GITHUB_API_ENDPOINT)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
};
