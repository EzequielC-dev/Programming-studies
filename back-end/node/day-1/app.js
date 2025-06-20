const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world!");
});

router.get("/about", (req, res) => {
  res.send("I wanted more!");
});

app.use("/", router);

app.listen(8000, () => {
  console.log("Running: http://127.0.0.1:8000/");
});

// exports.area = (width) => {
//   return width * width;
// };

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
