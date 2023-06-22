import express from "express";
import router from "./config/router.js";
import db from "./db/helpers.js";

const app = express();

app.use(router);

async function startServer() {
  try {
    await db.connect();
    console.log("Mongoose is connected to the database");
    // change this port variable to be an environment variable
    app.listen(3000, function () {
      console.log("App is listening on port 3000");
    });
  } catch (err) {
    console.log("Something when wrong connecting to the database");
  }
}

startServer();
