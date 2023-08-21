import React from "react";

const CheckboxItem = ({ item, onCheckboxChange, parentCategory, level }) => {
  const handleChange = () => {
    onCheckboxChange(item.id, parentCategory ? parentCategory.id : null);
  };

  return (
    <div
      style={{
        marginLeft: `${level * 20}px`,
      }}
    >
      <input
        type="checkbox"
        value={item.id}
        checked={item.checked || false}
        onChange={handleChange}
      />
      <label
        className={`ml-1 ${
          level === 0 ? "level-0" : level === 1 ? "level-1" : "level-2"
        }`}
      >
        {item.name}
      </label>
      {item.subcategories && (
        <ul className="list-none">
          {item.subcategories.map((subcategory) => (
            <li key={subcategory.id}>
              <CheckboxItem
                item={subcategory}
                onCheckboxChange={onCheckboxChange}
                parentCategory={item}
                level={level + 1}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CheckboxItem;
