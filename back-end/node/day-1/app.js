const express = require("express");
const app = express();
const router = express.Router();
const about = require("./about");

router.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/", router);
app.use("/about", about);

app.listen(8000, () => {
  console.log("Running: http://127.0.0.1:8000/");
});

module.exports = {
  area: (width) => {
    console.log(width * width);
    return width * width;
  },

  perimeter: (width) => {
    console.log(width * 4);
    return 4 * width;
  },

  router,
};
