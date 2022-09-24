const hiscores = require("osrs-json-hiscores")

module.exports = {
  getStats: (req, res) => {
    hiscores
      .getStatsByGamemode(req.params.rsn)
      .then((response) => res.send(response))
      .catch((err) => {
        res.status(404).send({ status: 404, error: err });
      });
  }
}

// app.get("/stats/:rsn", (req, res) => {
//   hiscores
//     .getStatsByGamemode(req.params.rsn)
//     .then((response) => res.send(response))
//     .catch((err) => {
//       res.status(404).send({ status: 404, error: err });
//     });
// });