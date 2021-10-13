const express = require('express');
const faker = require('faker');

const app = express();
const port = 3005;


app.get('/',(req,res)=>{
  res.send('mi servidor en express')

})

app.get('/new-rute',(req,res)=>{
  res.send('soy otra ruta del servidor')

})

app.get('/branch-offices',(req,res)=>{
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


app.get('/categories',(req,res)=>{
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

app.get('/marcas',(req,res)=>{
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




app.get('/products',(req,res)=>{
  const products = [];
  const {size}= req.query;
  const limit = size || 20;

  for (let index=0;index<limit;index ++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products);

})

app.get('/users',(req,res)=>{
  const{limit,offset}= req.query;

  if (limit && offset){
    res.json({
      limit,
      offset
    })
  }else {
    res.send('no hay parametros')
  }

})

app.get('/products/filter',(req,res)=>{
  res.send('Soy un filtro :)')

})

app.get('/products/:id',(req,res)=>{

  const{id}=req.params;

  res.json({
    id,
    name:'Desktop Optiplex 7080',
    price: 1800

  })

})




app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const{categoryId,productId}=req.params;

  res.json({
    categoryId,
    productId
  })

})



app.listen(port,()=>{
  console.log('mi port :'+port);
})
