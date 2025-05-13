const express = require('express');
const app = express();
app.use(express.json());
const connectDB = require('./config/db');
const routes = require("./api/routes/index");
connectDB();
app.use("/api", routes);
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));