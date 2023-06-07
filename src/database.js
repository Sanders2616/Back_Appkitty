const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://sandra123:root@sandra16.opn3s.mongodb.net/Sanrio?retryWrites=true&w=majority")
.then(db=> console.log("Mongodb atlas conneted"))
.catch(err=> console.error(err));