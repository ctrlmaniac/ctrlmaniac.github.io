import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { IntlProvider } from "react-intl";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { theme } from "src/helpers";
import { store } from "src/store";
import "moment/locale/it";

// Application components
import App from "./App";

moment.locale("it");

ReactDOM.render(
  <IntlProvider locale="it">
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
      locale="it"
    >
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </MuiPickersUtilsProvider>
  </IntlProvider>,
  document.getElementById("root")
);
