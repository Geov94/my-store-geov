const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3005;


app.get('/',(req,res)=>{
  res.send('mi servidor en express')

})
app.listen(port,()=>{
  console.log('mi port :'+port);
})

routerApi(app);
