// app.js
require('dotenv').config({path : './database/dbConfig.env'})
const express = require('express');
const app = express();
const userRouter = require('./router/user_router.js');

// 미들웨어
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}));
// application/json
app.use(express.json());

app.listen(3000, ()=>{
  console.log('Server start');
  console.log('http://localhost:3000');
})

// 라우팅
app.get('/', (req, res) => {
  res.send('hi');
})

app.use('/', userRouter);
