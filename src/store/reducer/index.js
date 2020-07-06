import { combineReducers } from "redux";

import { certificati } from "./certificati";
import { formazione } from "./formazione";
import { github } from "./github";
import { me } from "./me";

// RootReducer
export default combineReducers({
  me: me,
  formazione: formazione,
  certificati: certificati,
  github: github,
});
