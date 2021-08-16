import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";

export const NotRegisteredUser = () => {
  const { registerMutation, loading, error } = useRegisterMutation();

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(activateAuth);
        };
        const errorMsg = error && "The user already exist or there has been a problem.";
        return (
          <UserForm
            disabled={loading}
            error={errorMsg}
            onSubmit={onSubmit}
            title="Register"
          />
        );
      }}
    </Context.Consumer>
  );
};
