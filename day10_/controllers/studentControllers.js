const Student = require("../models/Student");


exports.createStudent=async(requestAnimationFrame,res)=>{
    try{
        const student = await Student.create(requestAnimationFrame.body);
        res.json(student);
    }
    catch(err)
    {
        res.status(400).json({error:err.message})
    }
};