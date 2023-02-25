const mongoose = require('mongoose');
const mongoUrl="mongodb+srv://mussafarariaz:backend123@cluster0.rdybflg.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
const mongoDb=async()=>{
 await mongoose.connect(mongoUrl,{useNewUrlParser:true},async(err,result)=>{
  if(err) console.log("error")
  
  else{
  console.log("Connected!");
  const fetch_data=await mongoose.connection.db.collection("libraries");
 console.log(fetch_data);


  }
 
 
 
 }
  
  
  
  )}

module.exports=mongoDb;