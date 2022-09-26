const faker = require("faker");

const express = require("express");

const app = express();

const port = 8000;

const generateUserObject = () => ({
    
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    })


const generateCompanyObject = () => ({
    
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        },
    
    })

app.get("/api/users/new", (req, res) => {
    const newUser = generateUserObject();
    res.json(newUser);
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = generateCompanyObject();
    res.json(newCompany);
}) 

app.get("/api/user/company", (req, res) => {
    const newUser = generateUserObject();
    const newCompany = generateCompanyObject();
    const responseObject = {
        user: newUser,
        company: newCompany,
    }
    res.json(responseObject);

app.listen(port,() => console.log(`Listening on port: ${port}`));
