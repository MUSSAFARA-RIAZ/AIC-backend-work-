const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Books=require('../models/Books');
router.post(
 '/createbooks',
 [
  body('name').isLength({ min: 5 }),
  body('authorName').isLength({min:5}),


 ],
 async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
   await Books.create({
     name: req.body.name,
     authorName:req.body.authorName
   })
   res.json({ success: true })
 } catch (error) {
   console.log(error)
   res.json({ success: false })
 }
}
 
    
   
)
module.exports = router