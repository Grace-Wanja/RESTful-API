const express = require('express');
const app = express();

// student Data:
const studentInfoData = [
    {
        "studentID": 1,
        "firstName": "Tarsis",
        "lastName": "Mukiibi",
        "phoneNumber": 779316508

    },

    {
        "studentID": 2,
        "firstName": "Grace",
        "lastName": "Wanja",
        "phoneNumber": 779085613
    },
    {
        "studentID": 3,
        "firstName": "Elizabeth",
        "lastName": "Kahunde",
        "phoneNumber": 7076345222
    },
    {
        "studentID": 4,
        "firstName": "Patience",
        "lastName": "Nimaro",
        "phoneNumber": 7076234922
    },
    {
        "studentID": 5,
        "firstName": "Gloria",
        "lastName": "Najjinda",
        "phoneNumber": 7076332922
    }
];

// Create End Point
//Retrieving all the Students Data
app.get('/api/students', function(req, res){
    res.json(studentInfoData);
})

app.get('/api/info', function(req, res){
    res.send('Welcome to the student information system...');
})

app.get('/api/students/:studentID', function(req, res){
    const studentID = req.params.studentID;
    const student = studentInfoData.find(student => student.studentID == studentID);

    if(student){
        res.json(student)
    }
    else{
        res.send('student not found')
    }
})


// start node server
const port = 3000;
app.listen(port, function(){
    console.log('Server is starting please call')
})

