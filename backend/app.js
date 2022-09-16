const express = require("express");
const app = express();
const cors = require("cors");

// Set port, and configure dotenv
const port = process.env.PORT || 5001;
require("dotenv").config();

// Router
const blogRouter = require("./routes/blog-routes");
const userRouter = require("./routes/user-routes");

// DB Connection
const dbConnect = require("./db/db");
dbConnect();

// Declare using json type on the app
app.use(express.json());

app.use(cors());

// Declare router
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
