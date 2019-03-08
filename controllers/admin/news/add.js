var db = require('../../../mysql');

module.exports = async (req, res, next) => {

  const { type, title, cover_img, link } = req.body;

  const response = {
    errcode: 0,
    data: null,
    errmsg: ''
  }

  if (!(type && title && cover_img && link)) {
    response.errcode = -1;
    response.errmsg = '输入信息不全或有误';
    return res.send(response);
  }

  const sql = 'insert into news(title, cover_img, link, type, create_time) values(?,?,?,?,?)';

  

  try {
    await db.query(sql, [ title, cover_img, link, type, new Date().getTime()]);
  } catch (error) {
    response.errcode = -1;
    response.errmsg = error.sqlMessage;
    return res.send(response);
  }


  return res.send(response);
}