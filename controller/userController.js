const employeeData = require("../constant/data")
const client = require("../db/config")
const db = client.db("Human_Resource")
const collection =db.collection("employee")

// Insert Queries

const addNewUser = async (req, res)=>{
    try {
        collection.deleteMany()
        const data = await collection.insertMany(employeeData)
        console.log(`${data.insertedCount} employee records inserted`)
        res.status(201).json({
            success: true,
            data
        })
    }
    catch (error) {
        console.log("Error while inserting data", error);
        res.status(400).json({
            success: false,
            error
        })
    }
}


//find User
async function getAllUser(req, res){
    try {
        const data = await collection.find().toArray()
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const salaryAboveThirtyThousand = async (req, res) => {
  try {
    const data = await collection.find({ salary: { $gt: "30000" } }).toArray();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const experienceAboveTwoYears = async (req, res) => {
    try {
        const data = await collection.find({ "overallExp": { $gt: "2" } }).toArray()
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}


const gradAfterFifteenExpAboveOneYear = async (req, res) => {
    try {
        const data = await collection.find({ "overallExp": { $gt: "1" }, "yearGrad": { $gt: "2015" } }).toArray()
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const updateSalary = async (req, res) => {
    try {
        const data = await collection.updateOne({ "salary": "70000" }, { $set: { "salary": "65000" } })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const deleteEmp = async (req, res) => {
    try {
        const data = await collection.deleteOne({ "lastCompany": "Y" })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}


module.exports = {addNewUser , getAllUser , salaryAboveThirtyThousand, experienceAboveTwoYears, gradAfterFifteenExpAboveOneYear, updateSalary, deleteEmp}