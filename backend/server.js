const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://kbe8601:hi2BX4mugQSKHuiq@cluster0.umjrnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("MongoDB Atlas connected")).catch((err)=>console.log(err));

app.use('/api/notes',require('./routes/notes'));
// app.get('/',(req,res)=>{
//     res.send("server is working");
// });

app.listen(5000,()=>console.log("Server running on port 5000"));

//hi2BX4mugQSKHuiq
//mongodb+srv://kbe8601:hi2BX4mugQSKHuiq@cluster0.umjrnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0