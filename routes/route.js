const route = require('express').Router();
const { addNewUser, getAllUser, salaryAboveThirtyThousand, experienceAboveTwoYears, gradAfterFifteenExpAboveOneYear, updateSalary, deleteEmp } = require("../controller/userController");

//Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""
route.get('/query1', addNewUser)

//Query the collection ""employee"" and list all the documents
route.get('/query2', getAllUser)

//Query the collection ""employee"" and list the employees who are having salary more than 30000
route.get('/query3', salaryAboveThirtyThousand)

//Query the collection ""employee"" and list the employees who are having experience more than 2 years.
route.get('/query4', experienceAboveTwoYears)


//Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year
route.get('/query5', gradAfterFifteenExpAboveOneYear)


//Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000
route.get('/query6', updateSalary)


//Delete all the documents from ""employee"" where last company is Y"
route.get('/query7', deleteEmp)

module.exports = route