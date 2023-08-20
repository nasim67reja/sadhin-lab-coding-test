import React from "react";

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
    <div className="mb-1">
      <input
        type="checkbox"
        value={item.id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="ml-1">{item.name}</label>
    </div>
  );
};
export default CheckboxItem;
