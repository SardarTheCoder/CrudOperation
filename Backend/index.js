const express = require('express')
const mongose = require('mongoose')
const cors = require ('cors')
const UserModel = require('./models/Users')



const app = express()
app.use(cors())
app.use(express.json())


mongose.connect("mongodb://localhost:27017/Crud")

app.post("/CreateUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/",(req,res)=>{
    UserModel.find({})
    .then(users => {res.json(users)
        console.log(users)})
    .catch(err => res.json(err))
})

app.get("/getUser/:id",async(req,res)=>{
  try {
    const id = req.params.id;
    console.log("id get from params",id)
    const user= await UserModel.findById(id)
    console.log("test get user", user)
     res.json(user)
  } catch (error) {
    console.log(error)
  }
  
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id},{name:req.body.name,email:req.body.email,age:req.body.age})
     .then(users => res.json(users))
     .catch(err => res.json(err))
})


app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res)) // Potential Issue Here
    .catch(err => res.json(err));
});

app.listen(3001,()=>{
    console.log("server is runing || Welcome backend")
})      