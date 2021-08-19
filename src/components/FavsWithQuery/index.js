import { useQuery, gql } from "@apollo/client";
import React from "react";
import { ListOfFavs } from "../ListOfFavs";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const useFavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  return { loading, data, error };
};

export const FavsWithQuery = () => {
  const { loading, data, error } = useFavsWithQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};
