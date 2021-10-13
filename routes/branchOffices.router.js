const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
  res.json([

    {
      ciudad:'cali',
      address: 'cll 7 n # 44-21'
    },

    {
      ciudad:'medellin',
      address: 'Ave. alvarez # 5-80a'
    },
    {
      ciudad:'bogota',
      address: 'Edificio colpatria 10mo Piso'
    }




  ])

});

module.exports = router;
