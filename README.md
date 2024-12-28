
# Jerky Republic

## Overview
**Jerky Republic** is a web application that allows users to explore and purchase a variety beef jerky products. Designed to make the online jerky shopping experience seamless and enjoyable, the platform features an intuitive user interface and powerful backend systems to manage products, orders, and customer data. Whether you're a jerky connoisseur or a casual snacker, Jerky Republic offers an array of unique and delicious jerky flavors.

---

## Features
- **Browse Products**: View a variety of jerky products sorted by type, flavor, or brand.
- **User Profiles**: Create an account to manage orders, track purchases, and save favorite products.
- **Shopping Cart**: Add products to your cart, modify quantities, and proceed to checkout.
- **Order Management**: Users can place and track orders from their account dashboard.
- **Secure Payment Gateway**: Integrates with payment providers to ensure safe transactions.
- **Admin Panel**: Admins can manage products, process orders, and view customer information.

---

## How to Use Jerky Republic
1. **Access the Website**:  
   Go to [Jerky Republic](https://jerky-republic.vercel.app/) to start shopping.

2. **Browse and Add Products to Your Cart**:  
   - Navigate through product categories or use the search bar to find specific jerky products.
   - Click **Add to Cart** to include your chosen items in your shopping cart.

3. **Checkout**:  
   - Once you're ready, go to your cart and click **Proceed to Checkout**.
   - Enter shipping and payment information to complete your order.


---

## Installation Instructions (For Local Development)

### Prerequisites
- **Node.js**: Download and install [Node.js](https://nodejs.org/).
- **MongoDB**: Set up a local or cloud-based MongoDB instance (e.g., using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

### Steps
1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/your-repo/jerky-republic.git
   cd jerky-republic
   ```

2. **Set Up Environment Variables**:  
   Create a `.env` file in the root directory and include the following:
   ```env
   MONGO_URI=your_mongo_database_connection_string
   ```

3. **Install Backend Dependencies**:  
   Navigate to the backend folder:
   ```bash
   cd backend
   npm install
   ```

4. **Run the Backend Server**:  
   Start the backend server:
   ```bash
   npm start
   ```

5. **Install Frontend Dependencies**:  
   Navigate to the frontend folder:
   ```bash
   cd ../frontend
   npm install
   ```

6. **Run the Frontend Application**:  
   Start the frontend server:
   ```bash
   npm run dev
   ```

7. **Access the Application**:  
   Open your browser and navigate to `http://localhost:3000` to use Jerky Republic locally.

---

## Tools and Technologies
Jerky Republic is built using modern web development technologies to ensure scalability, security, and performance.

- **Frontend**: React.js, styled-components for UI
- **Backend**: Node.js with Express.js for REST API
- **Database**: MongoDB for storing user profiles, orders, and products
