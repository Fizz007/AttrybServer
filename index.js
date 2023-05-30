const express = require('express');
const cors = require('cors');
require('./connectDB')
const userRoute = require('./routes/userRoute')
const carRoute = require('./routes/carRoute')
const formModel = require('./modal/form')
const app = express();

app.use(cors());


app.use(express.json());

const PORT = 4600;

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})

app.use('/user',userRoute)
app.use('/car',carRoute)

app.get('/', (req , res)=>{
    res.send('Attryb Api')
})

app.post('/form' , async(req , res)=>{
    try {
         let form = await formModel.create({...req.body});
         res.send({status:true , message : 'form submitted'})
    } catch (error) {
        res.send({status:false , message : error.message})
    }
})

app.get('/form' , async(req , res)=>{
    try {
         let forms = await formModel.find();
         res.send({status:true , data : forms});
    } catch (error) {
        res.send({status:false , message : error.message})
    }
})

