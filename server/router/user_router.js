// router/user_router.js
// 라우터 모듈

const express = require('express');
const router = express.Router();
// 라우팅 = 사용자의 요청(url+method) + service + view
const userService = require('../service/user_service.js');

// 전체조회
router.get('/users', async (req, res) => {
  let list = await userService.findAll();
  res.send(list);
});

// 단건조회
router.get('/users/:no', async (req, res) => {
  let userId = req.params.no;
  let userInfo = await userService.findById(userId);
  res.send(userInfo);
});

// 등록
router.post('/users', async (req, res) => {
  let addUser = req.body;
  let addUserInfo = await userService.userInsert(addUser);
  res.send(addUserInfo);
});


module.exports = router;

