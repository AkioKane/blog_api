const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const indexRouter = require("./routes/indexRouter");

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));

app.use("/api", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server started on", PORT);
});