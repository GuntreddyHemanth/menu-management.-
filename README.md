# Menu Management Backend

A Node.js backend application for managing a menu with categories, subcategories, and items. Built with Express.js and MongoDB.

## Features

- **Category Management**:
  - Create, read, update, and delete categories.
  - Each category can have a name, image, description, and tax details.
- **Subcategory Management**:
  - Create, read, update, and delete subcategories under a category.
  - Subcategories inherit tax details from their parent category by default.
- **Item Management**:
  - Create, read, update, and delete items under a category or subcategory.
  - Items include details like name, image, description, price, and tax.
- **Search**:
  - Search for items by name.

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: Database for storing menu data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Postman**: For testing APIs.

---

## Prerequisites

Before running the application, ensure you have the following installed:

1. **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
2. **MongoDB**: Install MongoDB locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
3. **Postman**: Optional, for testing APIs. Download from [postman.com](https://www.postman.com/).

---

## Setup and Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/menu-management-backend.git
cd menu-management-backend
```

### 2.Install Dependencies

Install the required dependencies using npm:

```bash
 npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory and add the following variables:

``` bash
Copy
PORT=3000
MONGO_URI=""
```
### 4. Start the Server
Run the application:

```bash
npm start
```
The server will start on http://localhost:3000

---
## Deployment on AWS EC2 with Nginx

The application is deployed on an AWS EC2 instance with Nginx as a reverse proxy. You can access the application at:

**Base URL**: [http://13.233.251.254/]

---

## Accessing the API

You can access the API endpoints using the base URL: [http://13.233.251.254/](http://13.233.251.254/).

### Categories

- **Get All Categories**:
   GET http://13.233.251.254/api/categories

- **Get Category by ID**:
   GET http://13.233.251.254/api/categories/:id

- **Create a Category**:
   POST http://13.233.251.254/api/categories

### Subcategories

- **Get All Subcategories**:
   GET http://13.233.251.254/api/subcategories

- **Get Subcategory by ID**:
   GET http://13.233.251.254/api/subcategories/:id

- **Create a Subcategory**:
  POST http://13.233.251.254/api/subcategories

### Items

  - **Get All Items**:
    GET http://13.233.251.254/api/items
    
  - **Get Item by ID**:
    GET http://13.233.251.254/api/items/:id

  - **Create an Item**:
    POST http://13.233.251.254/api/items

### Search Items
- **Search Items by Name**:
  GET http://13.233.251.254/api/items/search?name=__
  
    


















  

