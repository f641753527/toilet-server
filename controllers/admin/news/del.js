var db = require('../../../mysql');

module.exports = async (req, res, next) => {

  const {  id } = req.body;

  const response = {
    errcode: 0,
    data: null,
    errmsg: ''
  }

  const sql = 'delete from news where id = ?';

  try {
    await db.query(sql, [ id ]);
  } catch (error) {
    response.errcode = -1;
    response.errmsg = error.sqlMessage;
    return res.send(response);
  }


  return res.send(response);
}