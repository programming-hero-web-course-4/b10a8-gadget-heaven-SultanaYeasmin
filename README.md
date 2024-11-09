# Name of the project: 
GadgetHeaven ✨


## A brief description:
I have developed a responsive e-commerce platform for Gadget Haven, a gadget-buying website, based on a detailed Figma design. The site features a structured navigation bar, product categories, and individual product details pages. Key functionalities include a shopping cart, a wish-list system, and product filtering. Local storage has been used for data persistence and managing the cart and wish-list. Additional pages have been added for users to view and manage their cart and wish-list, sort items by price, and ensure a smooth user experience. The site has been made to prevent errors when reloading.


## Technologies used:
This project was built using the following technologies:

**HTML & CSS**: For structuring and styling the UI elements.

**Tailwind CSS**: Tailwind CSS, a utility-first CSS framework has been used that simplifies web development by providing a set of pre-designed utility classes.

**DaisyUI**: DaisyUI has been used which is a component library built on top of Tailwind CSS, which simplifies and extends the styling process by providing pre-designed UI components. 

**CSS Flexbox/Grid**:It has been For responsive layout and styling of player cards and UI components.

**JSON**:It has been used to store category or products data in a structured format.

**JavaScript (ES6)**:It has been used For logic and state management in the React application. Arrow functions, spread operators, Template Literals, Destructuring, let and const (Two new keywords for variable declarations) have been used.

**React**: 

   #### React Fundamentals Used

- **Components and Props**: Structured components for modular design.
- **React Hooks**: Such as useState, useEffect, useLocation, useNavigate and useParams.
- **State and Effects**: Used to handle UI state, especially in the cart and wishlist systems.
- **React Router**: Enables routing for a SPA experience, including home, statistics, dashboard, contact  and details pages.
- **Prop drilling**: Manages global state for the cart and wishlist, making data accessible across the application.
- **Conditional Rendering**: Used to show active routes, toggling button states, and rendering different UI elements based on state.
- **React-Toastify**: all alerts in the interface has been replaced with React-Toastify for better user notifications.


## Data Handling and Management

- **Prop drilling**: Manages global data, such as cart and wishlist items, allowing updates across components.
- **LocalStorage**: Provides persistence, so users' cart and wishlist selections remain after reloading the page.

## Features

1. **Responsive Design**: Optimized for mobile, tablet, and desktop view ports for a consistent and user-friendly experience across devices.
2. **Product Filtering**: Users can browse categories like computers, phones, and accessories. Filtered products load dynamically.
3. **Shopping Cart and Wishlist System**: Users can add products to their cart or wishlist, with data managed via prop drilling and LocalStorage for persistence.
4. **Sorting by Price**: Cart items can be sorted by price.
5. **Statistics Page with Chart**: A Composed Chart displaying product prices and ratings, providing insights on price vs. product name.

## Additional Features

- **Toasts for User Actions**:  
   - **Adding Item to Cart**: Displays a toast with a custom message when an item is added to the cart.
   - **Notification when items are already added to Cart**: Displays a toast with a custom message when an item is already added to the cart.
   - **Adding Item to Wishlist**: Shows a distinct message for wishlist additions to keep the user informed.

# Live Page Link: 
[Live Website Link](https://assignment-8-gadget-heaven-sya.netlify.app/)

## Requirement Document

[Requirement Document Link](https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-SultanaYeasmin/blob/main/Batch-10_Assignment-08.pdf)
