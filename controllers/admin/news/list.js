var db = require('../../../mysql');

module.exports = async (req, res, next) => {

  const { type, pageindex, pagesize } = req.query;

  const sql = type ? 'select * from news where type = ? ORDER BY order_index DESC' : 'select * from news';

  let response = [];

  let total = 0;

  try {
    response = await db.query(sql, [parseInt(type)]);

    total = response.length;

    if (pageindex !== undefined && pagesize !== undefined) {
      const page_total = Math.ceil((response.length / Number(pagesize)));
      const start = Number(pagesize) * Number(pageindex);
      response = pageindex === page_total - 1 ? response.slice(start) : response.slice(start, start + Number(pagesize));
    }
  } catch (error) {
    response = [];
  }
 
  return res.send({
    errcode: 0,
    data: {
      list: response,
      total
    },
  });
}