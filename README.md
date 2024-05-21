# Product and Order Management System

This is an Product and Order Management System application built with Node.js, Express, MongoDB, Mongooes, and TypeScript.

## Technologies Used

<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<li>Mongooes</li>
<li>TypeScript</li>
<li>Zod Validation</li>

## Features

<li>Create a new product</li>
<li>Create a new order</li>
<li>Retrieve all products</li>
<li>Retrieve a product by id</li>
<li>Update product information</li>
<li>Delete a product</li>
<li>Search a product</li>
<li>Retrieve all orders</li>
<li>Retrieve orders by user email</li>
<li>Inventory management logic (reduce quantity, update inStock status)</li>
<li>Error handling for insufficient quantity and not found scenarios</li>

## Setup Instructions

### Installation

1. Clone the repository
   `git clone https://github.com/ProgrammerShahJalal/ecommerce-app.git`
2. Navigate to the project directory:
   `cd ecommerce-app`
3. Install dependencies:
   `npm install`
4. Set up environment variables:
   Create a .env file in the root directory and Replace your_mongodb_connection_string with your actual MongoDB connection string.

### Running the Application

1. Start the development server:
   `npm run start:dev`
   The server will start running on http://localhost:5000.
