const express = require("express");
const app = express();

// Set port, and configure dotenv
const port = process.env.PORT || 5000;
require("dotenv").config();

// Router
const blogRouter = require("./routes/blog-routes");
const userRouter = require("./routes/user-routes");

// DB Connection
const dbConnect = require("./db/db");
dbConnect();

// Declare using json type on the app
app.use(express.json());

// Declare router
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
