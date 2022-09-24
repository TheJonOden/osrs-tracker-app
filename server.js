const express = require("express");
const hiscores = require("osrs-json-hiscores");
const app = express();
const mainRoutes = require("./routes/main");
const statRoute = require("./routes/stats")


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.get("/stats/:rsn", (req, res) => {
//   hiscores
//     .getStatsByGamemode(req.params.rsn)
//     .then((response) => res.send(response))
//     .catch((err) => {
//       res.status(404).send({ status: 404, error: err });
//     });
// });

app.use("/", mainRoutes);
app.use("/stats", statRoute);


app.listen(2121, () => console.log(`Example app listening on port ${2121}!`));