import React, { useState } from "react";
import { test } from "../components/test";

const CheckboxItem = ({
  item,
  isChecked,
  onCheckboxChange,
  parentCategories,
}) => {
  const handleChange = (e) => {
    const { checked } = e.target;
    const { id, name } = item;
    onCheckboxChange(id, name, checked, parentCategories);
  };

  return (
    <div>
      <input
        type="checkbox"
        value={item.id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label>{item.name}</label>
    </div>
  );
};

const CategoryList = ({ categories, onCheckboxChange, parentCategories }) => {
  return (
    <ul>
      {categories.map((category, i) => (
        <li key={i}>
          <CheckboxItem
            item={category}
            isChecked={category.checked}
            onCheckboxChange={onCheckboxChange}
            parentCategories={parentCategories}
          />
          {category.subcategories && (
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

const Test = () => {
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
    <div>
      <CategoryList
        categories={test.selectedCategories}
        onCheckboxChange={handleCheckboxChange}
        parentCategories={[]}
      />
      <div>
        <p>Selected Categories:</p>
        <ul>
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

export default Test;
