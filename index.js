const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors,errorHandler,boomErrorHandler}= require ('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());



const whitelist = ['http://localhost:8080','https://myapp.co'];
const options = {
  origin: (origin,callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null,true)
    }else {
      callback(new Error('no permitifo'));
    }
  }
}

app.use(cors(options));


app.get('/',(req,res)=>{
  res.send('mi servidor en express')

})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);


app.listen(port,()=>{
  console.log('mi port :'+port);
})


