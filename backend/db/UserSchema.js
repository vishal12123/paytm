const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/magesDB");
const {zod} = require("zod");

const z = zod.object({
  firstName:z.string(),
  lastName:z.string()
})
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    trim:true,
    unique:require,
    lowercase:true,
    minLength:3,
    maxLength:30
  },
  password: {
    type: Password,
    require: true,
    minLength:6
  },
  firstName: {
    type: String,
    require: true,
    trim:true,
    maxLength:50
  },
  lastName: {
    type: String,
    require: true,
    trim:true,
    maxLength:50
  },
});

const User = new mongoose.model("User", userSchema);

module.exports ={
  User
}