const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
  res.json([
    {
      id: 1,
      name_category: "Laptops"
    },
    {
      id: 2,
      name_category: "Desktops"
    },
    {
      id: 3,
      name_category: "Smartphones"
    }



  ])

});

router.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const{categoryId,productId}=req.params;

  res.json({
    categoryId,
    productId
  })

});

module.exports = router;

