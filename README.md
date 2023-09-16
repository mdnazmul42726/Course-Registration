# React Course Registration

## Description
Course Registration is an eco-friendly e-commerce platform that sells sustainable online courses.

## Features
- Users have a credit limit of 20 credits.
- When users add items to their cart, the total price of the items is displayed.
- The remaining credit is prominently shown, and users cannot proceed with the purchase if it exceeds 20 credits.
- Users can browse a variety of eco-friendly products, add them to the cart, and proceed to checkout.
- The React app provides a smooth single-page shopping experience with dynamic updates to the cart and remaining credit.

## State Management
In this project, state management is efficiently handled using React's `useState` hook. Here's a breakdown of the state variables and their updates:

### State Variables
- `selectedItems`: An array that stores the selected items in the cart.
- `totalcredit`: A variable that tracks the total credits used.
- `cardTotalPrice`: A variable that tracks the total price of items in the cart.
- `remaining`: A variable that tracks the remaining credits.

### State Updates
- The `selectedBtnHandleClick` function is responsible for updating the state variables when an item is selected. It handles duplicate selection and insufficient credits gracefully.

## Components
The application is divided into different components for a well-structured user interface:

- **Header**: Rendered at the top of the page.
- **Items**: Rendered to allow users to select items and receives the `selectedBtnHandleClick` function as a prop.
- **Carts**: Rendered to display cart information and receives relevant state data (`selectedItems`, `totalcredit`, `cardTotalPrice`, and `remaining`) as props.
- **Footer**: Rendered at the bottom of the page.

## Usage
To run this application locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

---

Feel free to use and contribute to this eco-friendly course registration platform! If you have any questions or feedback, please don't hesitate to reach out.
