const express = require("espress");
const { Mongoose } = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/architecture",
    { useNewURLParser: true, userUnifiedTopology: true }
);
