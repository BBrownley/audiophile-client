import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useWindowDimension } from "../../hooks/useWindowDimension";

import apiService from "../../apiService";

import { Container, Items, Item } from "./SuggestedItems.elements";

const baseUrl = "https://audiophile-backend.herokuapp.com";

/*

- Gets current category of the item the parent (SingleItemPage) belongs to and curr item ID
- Pass in category, id to server
- Server will find any other items belonging to the same category and add them into an array
- Server will return 3 items w/ name/img/itemId, with items in same category taking priority
- Any leftover spots will be filled with items from other categories
- Render them into the component

*/

export default function SuggestedItems(props) {
  const [categoryName, setCategoryName] = useState(props.category.name);
  const [itemId, setItemId] = useState(props.itemId);
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    setCategoryName(props.category.name);
    setItemId(props.itemId);

    const getSuggestedItems = async () => {
      const data = await apiService.getSuggestedItems(categoryName, itemId);
      setSuggested(data);
    };
    getSuggestedItems();
  }, [props]);

  return (
    <Container>
      <h3>You may also like</h3>
      <Items>
        {suggested.map((item, index) => {
          return (
            <Item key={index}>
              <img src={`${baseUrl}${item.image[0].url}`} />
              <h5>
                {
                  item.name
                    .toUpperCase()
                    .split("HEADPHONES")[0]
                    .split("EARPHONES")[0]
                }
              </h5>
              <Link to={`/item/${item.id}`}>
                <button>See product</button>
              </Link>
            </Item>
          );
        })}
      </Items>
    </Container>
  );
}
