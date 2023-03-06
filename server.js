// because we are working with an express application
const { faker } = require('@faker-js/faker');
//import express and store it in a variable
const express = require("express");
//initialize express app and store it in a variable
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))



// Create Product

const createProduct = () => {
    const newFakeProduct = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFakeProduct;
};

// Create Company
const createCompany = () => {
    const newFakeCompany = {
        companyName: faker.company.name(),
        companyPhone: faker.phone.number(),
        companyVehicle: faker.vehicle.vehicle(),
    };
    return newFakeCompany;
};

// Create User

const createUser = () => {
    const newFakeUser = {
        firstName: faker.name.firstName(),
        lastName:  faker.name.lastName(),
        favoriteCat: faker.animal.cat()
    };
    return newFakeUser;
};


// Create Routes


// Create New User

app.get("/api/users/new", (req, res) => {
    res.json(createUser())
})

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany())
})

app.get("/api/user/company", (req, res) => {
    let user = createUser()
    let company = createCompany()
    console.log(user,company)
    //res.json(user && company);
    res.json({
        msg:"This is a random user and company...",
        user: user,
        company: company
    })
})









// Can add these to the routes to test if routes are working
const newFakeProduct = createProduct();
console.log(newFakeProduct);

const newFakeCompany = createCompany();
console.log(newFakeCompany);

const newFakeUser = createUser();
console.log(newFakeUser);








// Last line of server code.

app.listen(port, () => console.log(`Welcome to the Death Star! You are on bridge port: ${port} `))