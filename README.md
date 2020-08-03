<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" />
</h1>

<h3 align="center">
  Challenge 2: FastFeet
</h3>

<h3 align="center">
  :warning: Stage 1/4 from Final Challenge :warning:
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-02?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-02?style=social">
  </a>
</p>

## :rocket: About the challenge

From now on we will be building an application for a fictional shipping company, the FastFeet

### **Tools insight**

You should create the application from scratch utilizing [Express](https://expressjs.com/) and configure all those tools:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (PostgreSQL or MySQL);

### **Functionalities**

Below are described all functionalities you should implement in your application

### **1. Authentication**

Allow a user to authenticate in your application using an e-mail and a password.

Create an admin user utilizing [sequelize seeds](https://sequelize.org/master/manual/migrations.html#creating-the-first-seed), this functionality is used to create
database registries automatically

To create a new seed use:

    yarn sequelize seed:generate --name admin-user

Add the following code inside the new file `src/database/seeds` to create a new admin user:

    const bcrypt = require("bcryptjs");

    module.exports = {
      up: QueryInterface => {
        return QueryInterface.bulkInsert(
          "users",
          [
            {
              name: "Distribuidora FastFeet",
              email: "admin@fastfeet.com",
              password_hash: bcrypt.hashSync("123456", 8),
              created_at: new Date(),
              updated_at: new Date()
            }
          ],
          {}
        );
      },

      down: () => {}
    };

Then run:

    yarn sequelize db:seed:all

Now you have a new user inside your database, utilize this user to all logins you do inside the application.

- Authentication must be done utilizing JWT.
- Validate all input data

### 2. Recipient management

After that, you need to allow recipients to be stored (registered/updated) inside the application, they have a recipient **name** and the address fields:
**street**, **number**, **complement**, **state**, **city** and **zip-code**.

Use a new table in the database called `recipients` to store recipient data.

Recipients registering only can be done by authenticated administrators in the app.

The recipient can not authenticated itself in the system, it has no password.

---

This project was given by RocketSeat, please access www.rocketseat.com.br to learn more.
