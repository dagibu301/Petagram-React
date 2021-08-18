import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";

export const NotRegisteredUser = () => {
  const {
    registerMutation,
    data: dataReg,
    error: errorReg,
    loading: loadingReg,
  } = useRegisterMutation();
  const {
    loginMutation,
    data: dataLog,
    error: errorLog,
    loading: loadingLog,
  } = useLoginMutation();

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const registerSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables })
            .then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            })
            .catch((err) => {
              console.log("El usuario ya existe o hay algún problema.");
            });
        };
        const errorRegMsg =
          errorReg && "El usuario ya existe o hay algún problema.";

        const loginSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          loginMutation({ variables })
            .then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            })
            .catch((err) => {
              console.log(
                "La contraseña no es correcta o el usuario no existe."
              );
            });
        };
        const errorLogMsg =
          errorLog && "La contraseña no es correcta o el usuario no existe.";

        return (
          <>
            <UserForm
              disabled={loadingReg}
              error={errorRegMsg}
              title="Registrarse"
              onSubmit={registerSubmit}
            />
            <UserForm
              disabled={loadingLog}
              error={errorLogMsg}
              title="Iniciar sesión"
              onSubmit={loginSubmit}
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};
