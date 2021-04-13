const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker-", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));
