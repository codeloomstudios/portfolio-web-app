const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


//Setting up the server
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Setting Up Routing
app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.use("/users", require("./routes/UsersRoutes"));
//add routes here...
// eg : 
//     app.use("/Components", require("./routes/ComponentsRoutes"));
//     app.use("/Categories", require("./routes/ComponentCategoriesRoutes"));
//     app.use("/ideaCategories", require("./routes/CPIdeaCategoryRoutes"));
//     app.use("/ideas", require("./routes/CPIdeasRoutes"));
//     app.use("/users", require("./routes/UsersRoutes"));
//     app.use("/roles", require("./routes/RolesRoutes"));
//     app.use("/rolesPermissions", require("./routes/RolesPermissionsRoutes"));
//     app.use("/learningNodes", require("./routes/LearningNodesRoutes"));


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