import React from "react";
import CheckboxItem from "./CheckboxItem";

const CategoryList = ({ categories, onCheckboxChange, parentCategories }) => {
  return (
    <ul className="list-none">
      {categories.map((category, i) => (
        <li key={i}>
          <CheckboxItem
            item={category}
            isChecked={category.checked}
            onCheckboxChange={onCheckboxChange}
            parentCategories={parentCategories}
          />
          {category.subcategories && ( // work like recursion
            <CategoryList
              categories={category.subcategories}
              onCheckboxChange={onCheckboxChange}
              parentCategories={[...parentCategories, category]}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
export default CategoryList;
