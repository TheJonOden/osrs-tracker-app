const express = require("express")
const hiscores = require("osrs-json-hiscores")


module.exports = {
  getStats: (req, res) => {
    hiscores
      .getStats(req.params.rsn)
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )
      .then((response) => res.send(response))
      .catch((err) => {
        res.status(404).send({ status: 404, error: err });
      });
      console.log(req.params.rsn)
      
  }
}

// app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );
//   next();
// });

// app.get("/stats/:rsn", (req, res) => {
//   hiscores
//     .getStatsByGamemode(req.params.rsn)
//     .then((response) => res.send(response))
//     .catch((err) => {
//       res.status(404).send({ status: 404, error: err });
//     });
// });