import * as C from "src/constants";

const initialState = {
  getting: true,
  getError: false,
  dettagli: {},
};

// Reducer
export function github(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case C.GITHUB_GET_START: {
      return {
        ...state,
        getting: true,
        getError: false,
        dettagli: {},
      };
    }

    case C.GITHUB_GET_SUCCESS: {
      return {
        ...state,
        dettagli: payload,
        getError: false,
        getting: false,
      };
    }

    case C.GITHUB_GET_FAIL: {
      return {
        ...state,
        dettagli: {},
        getError: payload,
        getting: false,
      };
    }

    default: {
      return state;
    }
  }
}
