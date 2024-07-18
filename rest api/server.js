const express = require("express");
const bodyParser = require("body-parser");
const itemRoutes = require("./src/items/routes");
const cors = require("cors");
const app = express();
// app.use(express.json());
//new:
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Nothing to Show Here.");
});
//route file for crud of items:
app.use("/items", itemRoutes);
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
