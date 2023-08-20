# Custom Tab Component with User Management

![App Diagram](./public/App-Diagram.png)

This project implements a custom tab component with advanced user management functionalities using React. The component comprises two tabs: one dedicated to displaying the admin user list and the other to present the employee user list. The project also boasts a streamlined user addition form and a user details update feature facilitated through a modal.

## Features

- A custom tab component that houses tabs for user lists for employees and administrators.
- A form for adding new users that asks for their First Name, Last Name, and User Type (administrator/employee).
- A novel "No Initial Load" feature prevents the corresponding API from triggering when a user accesses a tab for the first time. This guarantees effective loading.
- Pagination Improvement: Only a small amount of data entries—five per page—are first downloaded from the API. The "Next" button calls the next set of pages. Redux retains the retrieved data so that it may be used to avoid extra API calls when a user navigates back.
- A "View" button that leads to the user details page on each user's row.
- Consistent updating of user information via the details modal.
- Form with a defined path for presenting data; checkboxes and parent name options make selections easier.
- Dependent upon the Formik library for thorough form validation.
- CSS and Flexbox created a fluid and responsive layout design.
- API-independent User Creation/Update: Through Redux Toolkit, newly generated or modified user information is immediately reflected in the UI without needing API calls. In doing so, seamless user interaction and effective data management are ensured.

## Installation

1. Clone the repository:

```md
git clone https://github.com/nasim67reja/users-crud.git
cd your-repo
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm start
```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

- Go to the tab component of the app after opening it in your browser.
- Click the "Add User" button to see the user addition modal.
  Enter the necessary user information and choose the user type.
- To add the user, click "Submit". The user's name will be added to the appropriate list.

- To access the user details page, click the "view" button on a row in the user list.
- Click the "Edit" button on the user details page to edit user information using the exact modal.
- Select the data you want to see by navigating the separate route and using the checkboxes.

## Technologies Used

- React
- Formik (for form validation)
- CSS with Flexbox (for layout design)
- Redux Toolkit (for managing state)
- React Router Dom (for routing)
- Axios (for api calling)

## Credits

This project was completed as a coding test for Sadhin Lab. The initial task description and requirements were provided by them.
