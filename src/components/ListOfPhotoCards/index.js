import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { PhotoCard } from "../PhotoCard";
import { GET_PHOTOS } from "../../graphql/photos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data &&
        data.photos.map((photoCard, id) => (
          <PhotoCard key={id} {...photoCard} />
        ))}
    </ul>
  );
};
