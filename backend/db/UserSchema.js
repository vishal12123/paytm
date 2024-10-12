const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/magesDB"
  ).then(()=>{
    console.log("DB connected successfully")
  });
// const {zod} = require("zod");

// const z = zod.object({
//   firstName:z.string(),
//   lastName:z.string()
// })
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim:true,
    unique:true,
    lowercase:true,
    minLength:3,
    maxLength:30
  },
  password: {
    type: String,
    required: true,
    minLength:6
  },
  firstname: {
    type: String,
    required: true,
    trim:true,
    maxLength:50
  },
  lastname: {
    type: String,
    required: true,
    trim:true,
    maxLength:50
  },
});

const User = new mongoose.model("User", userSchema);

module.exports ={
  User
}