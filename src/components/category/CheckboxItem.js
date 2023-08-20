import React from "react";

const CheckboxItem = ({
  item,
  isChecked,
  onCheckboxChange,
  parentCategories,
  level,
}) => {
  const handleChange = (e) => {
    const { checked } = e.target;
    const { id, name } = item;
    onCheckboxChange(id, name, checked, parentCategories);
  };

  return (
    <div className="mb-1" style={{ marginLeft: `${level * 20}px` }}>
      <input
        type="checkbox"
        value={item.id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        style={{ fontWeight: `${level === 0 ? "bold" : ""}` }}
        className={`ml-1 ${
          level === 0 ? "level-0" : level === 1 ? "level-1" : "level-2"
        }`}
      >
        {item.name}
      </label>
    </div>
  );
};
export default CheckboxItem;
