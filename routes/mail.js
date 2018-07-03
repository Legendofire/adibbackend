let express = require("express");
let router = express.Router();

let card = {
  id: "",
  mail_reference: "",
  status: ""
}

let interval = null;

/* Create Shortened URL */
router.post("/check_status", function(req, res, next) {
  res.json({
    status: card.status
  })
});

function updateCard(){
  switch (card.status) {
    case "issuing":
      card.status = "waiting for delivery";
      break;
    case "waiting for delivery":
      card.status = "in route";
      break;
    case "in route":
      card.status = "delivered";
      break;
    case "delivered":
      card.status = "";
      clearInterval(interval);
      break;
    default:
      break;
  }
}

function setCard(id, ref, status){
  card.id = id;
  card.mail_reference = ref;
  card.status = status;
  interval = setInterval(updateCard,15000);
};

module.exports = router;
module.exports.setCard = setCard;
