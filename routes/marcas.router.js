const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
  res.json([
    {
      id:10,
      name_marca:'dell'


    },
    {
      id:10,
      name_marca:'HP'

    },
    {
      id:10,
      name_marca:'Asus'

    },
    {
      id:10,
      name_marca:'Huawei'

    },
    {
      id:10,
      name_marca:'Motorola'

    },
    {
      id:10,
      name_marca:'Samsumg'

    }
  ])

})

module.exports = router;
