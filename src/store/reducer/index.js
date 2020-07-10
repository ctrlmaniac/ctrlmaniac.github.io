import { combineReducers } from "redux";

import { github } from "./github";
import { me } from "./me";
import { formazione } from "./formazione";
import { certificati } from "./certificati";
import { esperienze } from "./esperienze";

// RootReducer
export default combineReducers({
  me: me,
  formazione: formazione,
  certificati: certificati,
  esperienze: esperienze,
  github: github,
});
