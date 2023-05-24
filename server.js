const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// dotenv config
dotenv.config();

// rest object
const app = express();

//mongodb connection
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));

// PORT
const port = process.env.PORT || 8080;
// LISTEN PORT
app.listen(port, () => {
  console.log(
    `Process running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
