import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/react";

import CategoryPageItem from "../CategoryPageItem/CategoryPageItem";

import BestGear from "../BestGear/BestGear";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

import { Container, CategoryHeader } from "./CategoryPage.elements";

import apiService from "../../apiService";

import ScaleLoader from "react-spinners/ScaleLoader";

const spinnerOverride = css`
  text-align: center;
  height: 10rem;
  margin-top: 0rem;
  transform: scale(3);
  padding-top: 3rem;
`;

export default function CategoryPage() {
  const location = useLocation();

  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const updateItems = async category => {
      setItems([]);
      setLoading(true);
      await timeout(1000);
      const items = await apiService.getAllFromCategory(category);
      setLoading(false);
      setItems(items);
    };

    // When category page renders, set it to current category
    // based on pathname
    setCategory(() => {
      const category = location.pathname.substring(1);
      // Fetch category items from server
      updateItems(category);
      return category;
    });
  }, [location.pathname]);

  return (
    <Container>
      <CategoryHeader>
        <h2>{category}</h2>
      </CategoryHeader>
      <div>
        {loading && <ScaleLoader />}
        {items.map((item, index) => {
          return <CategoryPageItem item={item} index={index} key={index} />;
        })}
      </div>
      <CategoryNavigation />
      <BestGear />
    </Container>
  );
}
