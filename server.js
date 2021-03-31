const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

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
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});
