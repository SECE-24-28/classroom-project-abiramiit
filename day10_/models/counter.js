const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

studentSchema.pre("save",async function(){
    if(this.isNew){
        const counter = await Counter.findOneAndUpdate(
            {id:"rollno"},
            {$inc:{seq:1}},
            {new:true,upsert:true}
        );
        this.rollno = counter.seq;
    }
});

module.exports = mongoose.model("Counter", counterSchema);