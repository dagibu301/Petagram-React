import React from "react";
import Context from "../Context";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <form onSubmit={activateAuth}>
          <button>Sign in</button>
        </form>
      );
    }}
  </Context.Consumer>
);
