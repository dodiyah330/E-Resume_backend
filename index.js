const express = require('express');
const bodyparser = require("body-parser")
const database = require('./db')
const personalDetails = require('./postRequests/personalDetails')
const objective = require('./postRequests/Objective')
const Qualification = require('./postRequests/Qualification')
const workExperience = require('./postRequests/workExperience')
const Intrest = require('./postRequests/Intrest')
const Referances = require('./postRequests/Referances')
const Skills = require('./postRequests/Skills')
const Home = require('./getRequests/Home')
const getPersonalDetails = require('./getRequests/getPersonalDetails')
const Registration = require('./postRequests/Registration')
const Login = require('./postRequests/login')
const cors = require("cors")
const isAuth = require("./getRequests/isAuth")
const getObjective = require("./getRequests/getObjective")
const getWorkexperience = require("./getRequests/getWorkexperience")
const getQualification = require("./getRequests/getQualification")
const getIntrest = require("./getRequests/getIntrest")
const getReferance = require("./getRequests/getReferance")
const getSkills = require("./getRequests/getSkills")
const putPersonaldetails = require("./putRequests/putPersonaldetails")
const putObjective = require("./putRequests/putObjective")
const putQualification = require("./putRequests/putQualification")
const putReferances = require("./putRequests/putReferances")
const putIntrest = require("./putRequests/putIntrest")
const putSkills = require("./putRequests/putSkills")
const putWorkexperience = require("./putRequests/putWorkexperience")
const getResumes = require("./getRequests/getResumes")
const deleteResumes = require ("./deleteRequest/deleteResumes")
const delSkills = require ("./deleteRequest/delSkills")
const delQualification = require ("./deleteRequest/delQualification")
const delWorkExperience = require ("./deleteRequest/delWorkExperience")

const app = express();

database.connection();

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT","DELETE"],
        credentials: true,

    })
);

app.use(express.json())

app.use(bodyparser.urlencoded({ extended: true }))
    
app.use('/Profpic/', express.static('public/images/'))

app.use("/getprofilepic/", express.static('./public/images'))
app.use("/", Home)
app.use("/", Registration)
app.use("/", Login)
app.use("/", personalDetails)
app.use("/", objective)
app.use("/", Qualification)
app.use("/", workExperience)
app.use("/", Intrest)
app.use("/", Referances)
app.use("/", Skills)
app.use("/", getPersonalDetails)
app.use("/", isAuth)
app.use("/", getObjective)
app.use("/", getWorkexperience)
app.use("/", getQualification)
app.use("/", getIntrest)
app.use("/", getReferance)
app.use("/", getSkills)
app.use("/", putPersonaldetails)
app.use("/", putObjective)
app.use("/", putQualification)
app.use("/", putReferances)
app.use("/", putIntrest)
app.use("/", putSkills)
app.use("/", putWorkexperience)
app.use("/", getResumes)
app.use ("/", deleteResumes)
app.use ("/", delSkills)
app.use ("/", delQualification)
app.use ("/", delWorkExperience)

app.listen(3001, () => {
    console.log("server running on 3001")
})

