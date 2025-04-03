// service/user_service.js
const mariaDB = require('../database/mapper.js');

// 전체조회
const findAll = async ()=>{

  let list = await mariaDB.query('userList')
                          .catch(err=>console.log(err));
  return list;

};

// 단건조회
const findById = async (userId)=>{ // 매개변수를 통해서..

  let result = await mariaDB.query('userInfo', userId)
                            .catch(err=>console.log(err));
  let info = result[0];
  return info;

}

// 등록
const userInsert = async (userInfo)=>{

  let insertInfo = getInsertInfo(userInfo);
  let result = await mariaDB.query('userInsert', insertInfo)
                      .catch(err=>console.log(err));

  if(result.insertId > 0){
    return{ result : true, user_no : result.insertId }
  } else {
    return{ result : false };
  }

};

function getInsertInfo(target) {
  return [
    target.user_id,
    target.user_pwd,
    target.user_name,
    target.user_gender,
    target.user_age
  ];
}

module.exports = {
  findAll, findById, userInsert
}; // 외부 open