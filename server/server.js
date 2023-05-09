const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const qr = require("qrcode");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/form", (req, res) => {
  qr.toDataURL("19102209", function (err, url) {
    console.log(url);
  });

  // const { name, email, message } = req.body;
  // console.log(`Received a message from ${name} (${email}): ${message}`);
  // res.sendStatus(200);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
