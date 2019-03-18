var db = require('../../../mysql');

module.exports = async (req, res, next) => {

  const { user_name, password } = req.body;

  const response = {
    errcode: 0,
    data: null,
    errmsg: ''
  }

  if (!user_name || !password) {
    response.errcode = -1;
    response.errmsg = '输入信息不全或有误！';
    return res.send(response);
  }

  // user_type: 1为admin端管理员， 2位app端用户

  const sql = 'select * from users where user_type = 1 and user_name = ? and password = ?';

  try {
    const users = await db.query(sql, [ user_name, password ]) || [];
    if (!users.length) {
      response.errcode = -1;
      response.errmsg = '用户名或密码错误';
      return res.send(response);
    }
  } catch (error) {
    response.errcode = -1;
    response.errmsg = '登录失败';
    return res.send(response);
  }

  // 登录成功
  return res.send(response);
}