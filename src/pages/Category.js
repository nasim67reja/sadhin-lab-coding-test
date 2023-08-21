import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../components/category/CategoryList";
import { toggleCheckbox } from "../store/category";
import "../components/category/category.css";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const handleCheckboxChange = (id, parentId) => {
    dispatch(toggleCheckbox({ id, parentId }));
  };

  return (
    <div className="flex justify-center items-center gap-4 container">
      <div>
        <CategoryList
          categories={categories}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default Category;
