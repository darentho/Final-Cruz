const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// app.get("/api", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
// });
sequelize.sync({ force: false }).then(() => {
  app.listen(5000, () => console.log(`server started on port 5000`));
});
