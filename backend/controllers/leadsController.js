const { sequelize2 } = require("../database/database");

exports.getleads = async (req, res) => {
  const partnerEmail = req.body.email;

  console.log(partnerEmail);

  const query = `select * from leads where partnerreferralemail='${partnerEmail}'`;

  const [result, metadata] = await sequelize2.query(query);

  res.status(200).json(result);
};
