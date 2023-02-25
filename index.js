const express=require("express");
const app=express();


app.use((req,res,next)=>{
 res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
 res.header(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type , Accept"

 );
 next();
 
})
const mongoDb=require('./db');
mongoDb();
app.use(express.json());
const library=require("./library");
app.listen(8000,()=>{
 console.log("Connected with the server")
})
app.use('/api',require("./Routes/CreatBooks"));


app.get('/books',(req,res)=>{

 res.send({
  success:true,
  message:"Data Fetched Successfully",
  data:library,

 })

})
app.get('/books/:id',(req,res)=>{
 var id=req.params.id
 var newBooks=library.filter(b1 =>b1.id==id)
 res.send({
  success:true,
  message:"Data fetched ",
  data:newBooks,
 })
})
// for books add
app.post('/books',(req,res)=>{
 var name=req.body.name
 if(name){
  library.push({
   id:(library.length+1).toString(),
   name:name
  })
  res.send({
   success:true,
   message:"Data Added Successfully"
  })
 }
 else{
  res.send({
   success:false,
   message:"ERROR OCCURED"
  })
 }
})
app.delete('/books/:id',(req,res)=>{
 var id=req.params.id
 var newBooks=library.filter(b1 =>b1.id!==id)
 library=newBooks;
 res.send({
  success:true,
  message:"data deleted successfully"
 })

})
app.put('/books/:id',(req,res)=>{
 var id=req.params.id;
 var name=req.body.name;
 var index=library.findIndex(e1=>e1.id==id)
 if(name){
  library[index]={
   ...library[index],
   name:name
  }
  res.send({
   success:true,
   message:"Updated successfully"
  })

 }
 else{
 res.send({
  success:false,
  message:"Not Updated Successfully",
  error:{
   field:"name",
   message:"cannot be null"
  }
 })


 }

})