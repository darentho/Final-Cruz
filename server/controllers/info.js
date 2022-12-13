const router = require("express").Router();
const { Sequelize } = require("sequelize");
const info = require("../models/employees");

router.get("/home", async (req, res) => {
  try {
    const infoData = await info.findAll({});

    const infoList = infoData.map((info) => info.get({ plain: true }));
    res.json({
      renderList: infoList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
