import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "Books",
      subcategories: [
        {
          id: 101,
          name: "Fiction",
          subcategories: [
            {
              id: 1011,
              name: "Fiction 1",
            },
            {
              id: 1012,
              name: "Fiction 2",
            },
          ],
        },
        {
          id: 102,
          name: "Non-fiction",
        },
      ],
    },
    {
      id: 2,
      name: "Electronics",
      subcategories: [
        {
          id: 201,
          name: "Smartphones",
        },
        {
          id: 202,
          name: "Laptops",
        },
      ],
    },
  ],
};

// categorySlice.js
const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    toggleCheckbox: (state, action) => {
      const { id, parentId } = action.payload;
      const category = findCategory(state.categories, id);

      if (category) {
        category.checked = !category.checked;

        // Update child checkboxes
        if (category.subcategories) {
          updateChildCheckboxes(category.subcategories, category.checked);
        }

        // Update parent checkboxes
        if (parentId !== null) {
          // Check if parentId is not null
          const parentCategory = findCategory(state.categories, parentId);
          if (parentCategory) {
            const allChildrenChecked = parentCategory.subcategories.every(
              (subcategory) => subcategory.checked
            );
            parentCategory.checked = allChildrenChecked;
          }
          // Call updateParentCheckboxes
          updateParentCheckboxes(state.categories, parentId);
        }
      }
    },
  },
});

const updateParentCheckboxes = (categories, parentId) => {
  for (const category of categories) {
    if (
      category.subcategories &&
      category.subcategories.some((sub) => sub.id === parentId && !sub.checked)
    ) {
      category.checked = false;
      updateParentCheckboxes(categories, category.id); // Uncheck higher-level parents
    }
    if (category.subcategories) {
      updateParentCheckboxes(category.subcategories, parentId);
    }
  }
};

const updateChildCheckboxes = (subcategories, checked) => {
  for (const subcategory of subcategories) {
    subcategory.checked = checked;
    if (subcategory.subcategories) {
      updateChildCheckboxes(subcategory.subcategories, checked);
    }
  }
};

const findCategory = (categories, id) => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.subcategories) {
      const found = findCategory(category.subcategories, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

export const { toggleCheckbox } = categorySlice.actions;

export default categorySlice.reducer;
