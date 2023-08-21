import React from "react";
import CheckboxItem from "./CheckboxItem";

const CategoryList = ({ categories, onCheckboxChange }) => {
  return (
    <ul className="list-none">
      {categories.map((category) => (
        <li key={category.id}>
          <CheckboxItem
            item={category}
            onCheckboxChange={onCheckboxChange}
            level={0}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
