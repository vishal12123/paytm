const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors());
const userRouter = require("./routes/userRoute");
app.use(express.json());

app.use("/api/v1/user", userRouter);


app.listen(3000,(req,res)=>{
  console.log("Server is running on 3000 port");
})


