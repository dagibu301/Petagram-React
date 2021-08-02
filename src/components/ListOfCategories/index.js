import React, { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../Category";

import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        "https://petgram-server-dagibu.vercel.app/categories"
      );
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
