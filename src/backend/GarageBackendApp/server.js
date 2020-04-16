const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport")

const app = express();
const users = require("./routes/api/users");

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json())

const dbKeys = require("./config/keys").mongoURI

mongoose.connect(dbKeys, {useNewUrlParser: true}    )
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err))

app.use(passport.initialize());
require("./config/passport")(passport);


app.use("/api/users", users)

const port = 5000;
app.listen(port, () => console.log("Server is running on port 5000"))