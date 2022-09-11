const express = require("express");
const dbConnect = require("./db/db");
const router = require("./routes/user-routes");
const port = process.env.PORT || 5000;
require("dotenv").config();

dbConnect();

const app = express();
app.use(express.json());

app.use("/api/user", router);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
