const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./api/routes/auth");
const usersRoute = require("./api/routes/users");
const tokenRoute = require("./api/routes/protected");
const contactRoute = require("./api/routes/contacts");

dotenv.config();

// Add cors options
var allowlist = ['http://localhost:3000']
var corsOptionsDelegate = function (req, callback) {
var corsOptions;
if (allowlist.indexOf(req.header('Origin')) !== -1) {
  corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
} else {
  corsOptions = { origin: false } // disable CORS for this request
}
callback(null, corsOptions) // callback expects two parameters: error and options
}

const app = express();

app.use(express.json());
app.use(cors(corsOptionsDelegate));

const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));


// Use defined routes
app.use("/api/auth", authRoute);
app.use("/api/users", tokenRoute, usersRoute);
app.use("/api/contact", tokenRoute, contactRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

