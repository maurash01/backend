const mongoose = require('mongoose');

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mern630?retryWrites=true&w=majority&appName=Cluster0"

// asynchrounous function - return promise object
mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);
    });


module.exports = mongoose;