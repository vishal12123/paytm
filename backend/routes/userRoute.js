const { Router } = require("express");
const router = Router();
const { User } = require("../db/UserSchema");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config")

const zod = require("zod");

const signupSchema= zod.object({
  username:zod.string().email(),
  password:zod.string(),
  lastname:zod.string(),
  lastname:zod.string() 
})
router.post("/signup", async(req, res) => {

  const body= req.body;
  const {success} = signupSchema.safeParse(req.body);

  if(!success){
    return res.json({
      message:"Email already taken / Incorrect  inputs"
    })
  }

  const user = await User.findOne({
    userName: body.username
  })

  if(user._id){
    return res.status(411).json({
      message:"Email already taken/ Incorrect Input"
    })
  }

  const dbUser= await User.create(body);
  const token = jwt.sign({
    userId:dbUser._id
  },JWT_SECRET)
  res.json({
    message:"User created successfully", 
    token:token
  })



})










module.exports=router;


// router.post("/signup", (req, res) => {
//   // const username = req.body.username;
//   // const password = req.body.password;
//   // const firstname = req.body.firstname;
//   // const lastname = req.body.lastname;

//   const { username, password, firstname, lastname } = req.body;

//   User.create({
//     userName: username,
//     password,
//     firstName: firstname,
//     lastName: lastname,
//   });
//   res.json({
//     msg: "User created successfully",
//   });
// });

// module.exports = router;



