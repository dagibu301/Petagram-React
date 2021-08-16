import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = (email, password) => {
  const [ loginMutation, { data, error, loading }] = useMutation(LOGIN);

  return { loginMutation, data, error, loading };
};
