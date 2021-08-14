import React, { Fragment } from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <Fragment>
          <UserForm title="Register" onSubmit={activateAuth} />
          <UserForm title="Sign in" onSubmit={activateAuth} />
        </Fragment>
      );
    }}
  </Context.Consumer>
);
