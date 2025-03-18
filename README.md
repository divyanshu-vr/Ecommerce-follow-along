# Ecommerce-follow-along

**Detailed Project Description: E-commerce Website**  

This project is a comprehensive e-commerce platform designed to deliver a user-friendly and secure shopping experience. Built with a robust tech stack, it ensures scalability, performance, and ease of use for both customers and administrators.  

**Key Features:**  

1. **User Authentication System:**  
   - Secure registration and login using email, phone, or social accounts.  
   - Password hashing and encryption for secure storage.  

2. **Dynamic and Intuitive User Interface:**  
   - Home page showcasing featured and trending products.  
   - Separate pages for product categories, individual products, and user-specific actions like orders and wishlist.  

3. **Product Management:**  
   - Detailed product listings with high-quality images, descriptions, reviews, and ratings.  
   - Sorting and filtering options based on price, ratings, categories, etc.  

4. **Advanced Cart and Checkout System:**  
   - Persistent cart functionality linked to user profiles.  
   - Option to apply coupon codes and discounts.  

5. **Payment Gateway Integration:**  
   - Support for multiple payment options (credit/debit cards, UPI, net banking, wallets).  

6. **Order Management System:**  
   - Order tracking with real-time updates (e.g., processing, shipped, delivered).  
   - Easy returns and refunds with status tracking.  


**Tech Stack:**  
- **Frontend:** React.js and Tailwind CSS for a modern, responsive user interface.  
- **Backend:** Node.js with Express for robust server-side functionality.  
- **Database:** MongoDB for scalable and flexible data storage.  
- **Authentication:** Firebase for authentication users
- **Payment Integration:** -----
- **Hosting and Deployment:**  
  - vercel for deploying the website
  - herkou for storing the database

# **Milestone 2**

- **Project Organization:** Created a structured folder hierarchy with separate directories for frontend and backend.
- **Frontend Setup:** Initialized a React app to serve as the base for building the user interface.
- **Backend Setup:** Set up a Node.js server, laying the groundwork for future API integration.
- **Styling Configuration:** Integrated and configured Tailwind CSS for responsive and utility-based styling.
- **Login Page Development:** Designed and developed a functional and visually styled Login Page for the frontend.
- **Development Enhancements:** Added optional extensions to improve efficiency during development.
- **Version Control:** Pushed the project to a publicly accessible GitHub repository, ensuring it adheres to the submission guidelines.

This milestone established a solid foundation for the project by combining structured organization, modern styling, and initial feature development.

# Milestone 3: Project Setup for Backend 

In this milestone, the backend for the e-commerce application was set up, connecting it to a database and implementing basic error handling. 

**Backend Folder Structure:**

- controllers/
- models/
- routes/: Contains API route definitions.
- middleware/: Manages middleware functions like error handling.
- utils/: Contains reusable utility functions.
- config/: Stores environment and database configuration files.

**Server Setup**
- A Node.js server was created using Express.
- The server was configured to listen on a designated port (default: 5000).
- API endpoints were set up to handle basic requests.
 
 **Database Connection**
- Integrated MongoDB as the primary database for efficient data storage.
- Successfully established a connection to MongoDB using Mongoose.
- Ensured database connection parameters were stored securely using dotenv.

**Error Handling**

- Implemented basic error-handling middleware to provide clear and helpful error messages.
- Added fallback logic to handle uncaught errors and invalid route.

# Milestone 4: User Model, Controller & File Uploads

In this milestone, we:
- Created the User Model using MongoDB schemas to define how user data (name, email, password, etc.) is structured in the database.

- Developed the User Controller to handle user-related operations like adding a new user and retrieving user details.

- Implemented Multer to enable file uploads, allowing users to upload profile pictures and store them in the backend.

# Milestone 5

- Built a Sign-Up Page using HTML and CSS.
- Added input fields for Name, Email, and Password.
- Implemented form validation to ensure correct data entry.
- Checked email format and password security criteria.
- Ensured a clean and user-friendly UI for better user experience.

# Milestone 6 

- Used bcrypt to encrypt passwords before saving them in the database.
- Ensured passwords are not stored in plain text for better security.
- Stored complete user data (name, email, hashed password) securely.
- Enhanced data protection to prevent password theft and unauthorized access.
- Followed security best practices to comply with privacy regulations

# Milestone 7

In this milestone, we implemented secure login authentication by validating user credentials during the login process. We created a login endpoint that accepts the user's email/username and password.

- The backend retrieves user data from the database based on the provided email/username. If the user does not exist, an appropriate error message is returned.
- For password validation, we used bcrypt to compare the entered password with the stored hashed password.
- If the passwords match, the user is successfully authenticated; otherwise, an error is sent.
- This approach ensures passwords remain encrypted and secure, preventing unauthorized access and enhancing data protection.

By following security best practices, we strengthened authentication and ensured compliance with standards like GDPR and PCI-DSS

# Milestone 8 Summary   
In this milestone, we focused on creating a **frontend card component** to showcase products and displaying them on the homepage.  

- Designed a **reusable card component** that accepts **product details** like name, price, and image as props.  
- Created a **dynamic card rendering system** by mapping through an array of products and rendering a card for each item.  
- Ensured the layout was **consistent** across all product cards, providing a **clean and organized structure**.  
- Set up a **grid or flexbox layout** to display the product cards on the homepage, enhancing the overall **user experience** and improving **product browsing**.  
- The design was made flexible and scalable, allowing easy integration and reuse in other parts of the app. 

# Milestone 9 Summary   
In this milestone, we focused on creating a **frontend form** for adding product details, including the ability to upload multiple images.

- Designed a **form for product input** to capture key details like name, description, price, and product images.  
- Enabled **multiple image uploads**, allowing users to add several images for each product.  
- This form is designed to **store product data** in the database, which will later be displayed on the product homepage we built in previous milestones.  
- The milestone also provides flexibility for future improvements, such as **admin-only access** for product uploads or creating specific profiles for users to manage their product listings. 

# Milestone 10 Summary   
In this milestone, we focused on creating a **Mongoose schema** for products and an endpoint to store product details in MongoDB.

- Designed a **Mongoose schema** to define the structure of product data, including **name, description, price, and image URL**.  
- Added **validation** to ensure the data is correct (e.g., required fields, correct data types) before saving it.  
- Created a **POST endpoint** to receive product details, validate the data, and store it in the MongoDB database.  
- Implemented **validation** to ensure only valid data is saved, maintaining **data integrity** and preventing errors.  
- This milestone lays the foundation for future features, such as **admin-only access** for product uploads and managing product listings by users with shop profiles..


# Milestone 11: Sending and Displaying Data Dynamically 

**Learning Goals:**
- Write an endpoint to send product data from MongoDB to the frontend.
- Receive data at the frontend and display it dynamically using a product card component.

**Steps:**
1. **Backend:**
   - Create an endpoint to fetch and send all product data from MongoDB.

2. **Frontend:**
   - Write a function to fetch data from the backend.
   - Pass the fetched data to the product card component.
   - Display the data dynamically on the frontend.

**Note:** This milestone focuses on understanding data flow between backend and frontend, and dynamically rendering data using components.


# Milestone 12: Displaying User-Specific Products   

**Learning Goals:**  
- Write an endpoint to filter and send product data based on user email from MongoDB.  
- Receive filtered data at the frontend and display it dynamically using the product card component.  

**Steps:**  
1. **Backend:**  
   - Create an endpoint to fetch and send products filtered by the user's email.  

2. **Frontend:**  
   - Write a function to fetch user-specific product data from the backend.  
   - Pass the fetched data to the product card component.  
   - Display the data dynamically on the "My Products" page.  

**Note:** This milestone focuses on filtering data based on constraints (e.g., user email) and dynamically rendering user-specific data using components.


# Milestone 13: Editing Uploaded Products   

**Learning Goals:**  
- Write an endpoint to update existing product data in MongoDB.  
- Auto-fill the form with previous data and provide an option to edit and save changes.  

**Steps:**  
1. **Backend:**  
   - Create an endpoint to receive updated data and modify the existing product in MongoDB.  

2. **Frontend:**  
   - Add an edit button to the product card.  
   - On clicking the edit button, auto-fill the form with the existing product data.  
   - Allow users to edit the data and save the updated details.  

**Note:** This milestone focuses on performing update operations and understanding how to edit and save changes to existing data.


# Milestone 14: Deleting Product Data   

**Learning Goals:**  
- Write an endpoint to delete a product from MongoDB using its unique ID.  

**Steps:**  
1. **Backend:**  
   - Create an endpoint to delete a product from MongoDB based on its ID.  

2. **Frontend:**  
   - Add a delete button to the product card.  
   - On clicking the delete button, send the product ID to the backend endpoint for deletion.  

**Note:** This milestone focuses on performing delete operations and understanding how to remove data from the database using specific identifiers.


# Milestone 15: Creating and Integrating a Navbar Component   

**Learning Goals:**  
- Create a reusable Navbar component with links to all pages.  
- Integrate the Navbar component across multiple pages for smooth navigation.  

**Steps:**  
1. **Create Navbar Component:**  
   - Design a Navbar with links to:  
     - Home  
     - My Products  
     - Add Product  
     - Cart  
   - Ensure the Navbar is responsive and works on all screen sizes.  

2. **Integration:**  
   - Add the Navbar component to all pages of the application.  
   - Ensure smooth and easy navigation between pages.  

**Note:** This milestone focuses on creating reusable components (Navbar) and understanding how to enable seamless navigation across multiple pages in an application.


# Milestone 16: Creating a Product Info Page   

**Learning Goals:**  
- Create a dedicated page to display detailed information about a single product.  
- Add functionality to select quantity and an "Add to Cart" button.  

**Steps:**  
1. **Product Info Page:**  
   - Design a new page to display all details of a product (e.g., name, description, price, image, etc.).  
   - Add a quantity selector and an "Add to Cart" button.  

2. **Functionality:**  
   - Allow users to choose the quantity of the product.  
   - Implement the "Add to Cart" button to store the selected product and quantity.  

**Note:** This milestone focuses on creating a detailed product view page and adding interactive features like quantity selection and cart functionality.


# Milestone 17: Adding Products to Cart 

**Learning Goals:**  
- Modify the user schema to store cart products.  
- Write a backend endpoint to receive and store product details in the cart.  

**Steps:**  
1. **Schema Update:**  
   - Update the user schema to include a field for storing cart products.  

2. **Backend Endpoint:**  
   - Create an endpoint to receive product details (e.g., product ID, quantity) and store them in the user's cart in the database.  

**Note:** This milestone focuses on implementing cart functionality, including schema design and backend logic for storing cart items.


# Milestone 18: Fetching Cart Products   

**Learning Goals:**  
- Create a backend endpoint to handle requests from the cart page.  
- Write logic to fetch all products inside the user's cart based on their email.  

**Steps:**  
1. **Backend Endpoint:**  
   - Create an endpoint to receive requests from the cart page.  
   - Fetch all products stored in the user's cart using their email.  

2. **Frontend Integration:**  
   - Use the fetched data to display products dynamically on the cart page.  

**Note:** This milestone focuses on retrieving and displaying cart data, enhancing the cart functionality for a seamless user experience.


# Milestone 19  

- Created a cart page to display products from the cart.  
- Added `+` and `-` buttons to increase or decrease product quantity.  
- Built a backend endpoint to handle quantity updates.  
- Improved cart functionality with dynamic updates.


# Milestone 20: Creating a Profile Page   

**Learning Goals:**  
- Create a backend endpoint to fetch and send user data using their email.  
- Design a frontend profile page to display user details and addresses.  

**Steps:**  
1. **Backend Endpoint:**  
   - Create an endpoint to fetch and send user data (e.g., profile photo, name, email, addresses) based on their email.  

2. **Frontend Profile Page:**  
   - Display user details in two sections:  
     - **Section 1:** Profile photo, name, and email.  
     - **Section 2:** Addresses with an "Add Address" button.  
       - If no addresses are found, display "No address found."  

3. **Navigation:**  
   - Allow users to navigate to the address form page when clicking "Add Address."  

**Note:** This milestone focuses on creating a profile page and displaying user data, including addresses, in an organized and user-friendly manner.


# Milestone 21: Creating an Address Input Form   

**Learning Goals:**  
- Create a frontend form to collect address details.  
- Store the input address in a state and handle navigation to the form page.  

**Steps:**  
1. **Address Form:**  
   - Design a form to collect:  
     - Country  
     - City  
     - Address Line 1  
     - Address Line 2  
     - Zip Code  
     - Address Type  

2. **State Management:**  
   - Create a state to store the input address details.  

3. **Navigation:**  
   - When clicking "Add Address" in the profile, navigate to the address form page.  

**Note:** This milestone focuses on creating an address input form and managing user input for address details.


# Milestone 22: Saving Address in User Profile   

**Learning Goals:**  
- Create a backend endpoint to store the address received from the frontend form inside the user profile in the database.  

**Steps:**  
1. **Backend Endpoint:**  
   - Create an endpoint to receive address details (country, city, address1, address2, zip code, address type) from the frontend form.  
   - Add the received address to the address array in the user collection.  

2. **Database Update:**  
   - Ensure the address is saved and linked to the specific user profile.  

**Note:** This milestone focuses on creating an endpoint to store and manage user addresses in the database, enhancing the profile functionality.



# Milestone 23: 

1. **Place Order Button in Cart Page:**  
   - Added a "Place Order" button inside the cart page.  
   - When clicked, it navigates the user to the "Select Address" page.  

2. **Select Address Page:**  
   - Displays all saved addresses of the user.  
   - Allows the user to select an address using a radio button.  
   - Disables the "Confirm Address" button until an address is selected.  

3. **Backend Endpoint for Fetching Addresses:**  
   - Created an API endpoint (`GET /api/addresses`) that retrieves all saved addresses of the logged-in user from the database.  

4. **Mongoose Schema for Orders:**  
   - Defined an `Order` schema to store order details, including:  
     - User ID (who placed the order)  
     - Selected delivery address  
     - Ordered items with product details and quantity  
     - Total amount of the order  
     - Order status (Pending, Shipped, Delivered) 

# Milestone 24

1. **Order Confirmation Page:**  
   - After selecting an address, users are taken to an **Order Confirmation Page**.  
   - This page displays:  
     - All the products the user is ordering, along with their quantity.  
     - The selected delivery address where the order will be shipped.  
     - The total cart value calculated from the selected items.  
     - A Place Order button is added at the bottom to finalize the order.  

2. **Navigation & State Management:**  
   - The `OrderConfirmationPage` receives the **selected address, cart items, and total price** via `location.state`.  
   - This ensures the correct details are passed from the cart and address selection stages.

3. **Updated Backend and Schema:**  
   - The backend already has an endpoint (`GET /api/addresses`) to fetch user addresses.  
   - The `Order` Mongoose schema was **kept intact** to store order details when users finalize their purchase.  
  
  # Order Management Milestones

# Milestone 25

- Create an endpoint to receive products, user, and address details.
- Retrieve user `_id` using their email.
- Store separate orders for each product with the same address.
- Use the `Order` schema to save order details in MongoDB.

# Milestone 26

- Create an endpoint to receive user email.
- Retrieve `_id` using the email.
- Fetch all orders associated with the user and return them in the response.

# Milestone 27

- Create `my-orders` page.
- Send a GET request to fetch user orders using email.
- Display all user orders.
- Add `My Orders` page in the navbar for easy navigation.

# Milestone 28

- Add a `Cancel Order` button for each order in `my-orders`.
- Hide the button for already canceled orders.
- Create an endpoint to receive `order-id`.
- Retrieve order by ID, update status to `canceled`, and save changes.     

