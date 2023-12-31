const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


//Setting up the server
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(express.json());

//Setting Up Routing
app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.use("/users", require("./routes/UsersRoutes"));
//add routes here...
app.use("/newsletterEmails", require("./routes/NewsLetterEmailsRoutes"));
app.use("/contact", require("./routes/ContactRoutes"));
app.use("/request", require("./routes/RequestRoutes"));
app.use("/projectSample", require("./routes/ProjectSampleRoutes"));



//Setting up the database connection
const connectDB = (url) => {
    mongoose.set("strictQuery", true);

    mongoose
        .connect(url)
        .then(() => console.log("MongoDB connected !"))
        .catch((error) => console.log(error));
};

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();