import React, { useState } from "react";
import { test } from "../components/global/test";
import CategoryList from "../components/category/CategoryList";
import "../components/category/category.css";

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleCheckboxChange = (id, name, checked, parentCategories) => {
    setSelectedCategories((prevSelected) => {
      if (checked) {
        return {
          ...prevSelected,
          [id]: { name, parentCategories },
        };
      } else {
        const { [id]: removed, ...rest } = prevSelected;
        return rest;
      }
    });
  };

  return (
    <div className="flex justify-center items-center gap-4 container">
      <div className="flex-1">
        <CategoryList
          categories={test.selectedCategories}
          onCheckboxChange={handleCheckboxChange}
          parentCategories={[]}
        />
      </div>
      <div className="flex-1">
        <p className="font-semibold mb-2">Selected Categories:</p>
        <ul className="list-none">
          {Object.entries(selectedCategories).map(
            ([id, { name, parentCategories }]) => (
              <li key={id}>
                {parentCategories.map((parent) => parent.name).join(" > ")}
                {parentCategories.length > 0 && " > "}
                {name}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Category;
