const express = require("express");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.use("/api", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server started on", PORT);
});