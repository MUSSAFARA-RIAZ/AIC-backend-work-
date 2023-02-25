const mongoose=require("mongoose");
const {Schema}=mongoose;
const LibraryBooksSchema=new Schema({

  name:{
   type:String,
 
  },
  author:{
   type:String,

  }
  

 })
 module.exports=mongoose.model('library',LibraryBooksSchema);
 