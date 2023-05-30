const mongoose = require('mongoose')


// used to connect node server with mongodb
// connect method returns a promise

mongoose.connect('mongodb+srv://faisal:RGeLUeuplgc1GOyl@cluster0.zxg5gk9.mongodb.net/')
.then(()=> {
console.log('connection db succesful')
})
.catch((err)=> {
    console.log(`Error: ${err.message}`)
})