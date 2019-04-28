const express = require("express"),
  app = express(),
  path = require("path"),
  fs = require("fs");

app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.static(path.resolve(__dirname, "public")));

app.get("*", (req, res) => {
  const index = fs.readFileSync(
    path.resolve(__dirname, "dist", "index.html"),
    "utf-8"
  );
  res
    .status(200)
    .send(index)
    .end();
});

app.listen(process.env.PORT || 3100);
