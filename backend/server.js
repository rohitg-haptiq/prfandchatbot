const express = require("express");

const cores = require("cors");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const cookieParser = require("cookie-parser");

const registerroute = require("./routes/auth");

const partnerRoutes = require("./routes/partner");

const botroutes = require("./routes/botroutes");

const leadsRoute = require("./routes/leadRoutes");

const { sequelize } = require("./database/database");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cores());

app.use(cookieParser());

app.use("/auth", registerroute);
app.use("/api", partnerRoutes);
app.use("/leads", leadsRoute);
app.use("", botroutes);

sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((error) => console.error("Error syncing database:", error));

app.listen(4000, () => {
  console.log("SERVER STARTED");
});
