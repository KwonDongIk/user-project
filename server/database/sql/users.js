// database/sql/users.js
// table : t_user

// 전체조회
const userList = `SELECT user_no, 
                         user_id, 
                         user_pwd, 
                         user_name, 
                         user_gender, 
                         user_age, 
                         join_date
                  FROM t_user
                  ORDER BY user_no`;
// 단건조회
const userInfo = `SELECT user_no, 
                         user_id, 
                         user_pwd, 
                         user_name, 
                         user_gender, 
                         user_age, 
                         join_date
                  FROM t_user
                  WHERE user_no = ?`;
// 등록
const userInsert = `INSERT INTO t_user (user_id, user_pwd, user_name, user_gender, user_age) VALUE (?, ?, ?, ?, ?);`;
// 수정
const userUpdate = `UPDATE t_user
                    SET ?
                    WHERE user_no = ?`;

module.exports = {
  userList,
  userInfo,
  userInsert,
  userUpdate,
}