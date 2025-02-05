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