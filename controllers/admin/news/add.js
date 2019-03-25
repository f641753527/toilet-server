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

  let sql = 'select * from news where type = ? order by order_index desc';

  let order = 0;

  try {
    const list = await db.query(sql, [type]);
    order = list && list.length ? list[0].order_index + 1 : 0;
  } catch (error) {
    response.errcode = -1;
    response.errmsg = error.sqlMessage;
    return res.send(response);
  }


  sql = 'insert into news(title, cover_img, link, type, create_time, order_index) values(?,?,?,?,?,?)';

  

  try {
    await db.query(sql, [ title, cover_img, link, type, new Date().getTime(), order]);
  } catch (error) {
    response.errcode = -1;
    response.errmsg = error.sqlMessage;
    return res.send(response);
  }


  return res.send(response);
}