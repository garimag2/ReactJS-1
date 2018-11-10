import React from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";

import { firebase } from "../Firebase";
// import * as routes from "../../constants/routes";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push("/signin");
        }
      });
    }

    render() {
      return this.props.sessionStore.authUser ? (
        <Component {...this.props} />
      ) : null;
    }
  }

  return compose(
    withRouter,
    inject("sessionStore"),
    observer
  )(WithAuthorization);
};

export default withAuthorization;
