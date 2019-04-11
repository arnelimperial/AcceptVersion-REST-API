# Custom header versioning instance in REST API

REST API with users registration and login features versioning using Accept-header. Other functionalities include encryption of password, error-handling, and authentication using JWT. In partial fulfillment of the requirements for the subject [Mastering the Fundamentals of RESTful API Design of Metropolia Open UAS] (http://opendata.metropolia.fi/koulutushaku/search.php#result-87398).

***1.0.0***

---


## Installation

```bash 
# Install dependencies
npm install

# Serve locally on localhost:8080
npm run dev
```

## Built-With

- Restify
- Mongoose
- Dependencies are listed in package.json


## Base URI

```bash
https://api-data-47.herokuapp.com/

```

## Accept-header version 1.0.0 Endpoints
- GET /users - Fetch all users.
- POST /register - User registration with username, email and password field in the request body.
- POST /users/login - Login registered users by providing email and password in the request body. Token will be generated to access the protected routes.
- GET /users/:username - Fetch user by username.
- PUT /users/:id (protected) - Update user's information by ID. Password reset is not yet initiated.
- DELETE /users/:id (protected) - Delete user by ID.

## Accept-header version 2.0.0 Endpoints
- GET /users - Fetch all users.
- POST /register - User registration with username, email, password and confirmPassword field in the request body.
- POST /users/login - Login registered users by providing email and password in the request body. Token will be generated to access the protected routes.
- GET /users/:username - Fetch user by username.
- PUT /users/:id (protected) - Update user's information by ID. Password reset is not yet initiated.
- DELETE /users/:id (protected) - Delete user by ID.

---

### Coded by

[Arnel Imperial](https://arnelimperial.bitbucket.io/)



