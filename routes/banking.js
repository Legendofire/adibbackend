let express = require("express");
let router = express.Router();

let randomGen = require("../helpers/randomString");
let mail = require("./mail");

let balance_amount = 10000;

router.get("/check_balance", function(req, res, next){
  res.status(200);
  res.json({
    amount: balance_amount
  })
});

/* Create Shortened URL */
router.post("/check_balance", function(req, res, next) {
  res.status(200);
  res.json({
    amount: balance_amount
  })
});

router.post("/transfer_amount", function(req, res, next) {
  const transfer_amount = req.body.amount;
  console.log(req.body);
  if(transfer_amount > balance_amount){
    res.status(200);
    res.json({
      message: "Insufficient Balance"
    })
  } else {
    balance_amount = balance_amount - transfer_amount;
    res.status(200);
    res.json({
      balance: balance_amount
    })
  }

});

router.post("/issue_cc", function(req, res, next) {
  res.status(200);
  let randomval = Math.floor(1000000000000000 + Math.random() * 9000000000000000)+"";
  let groups = randomval.match(/([0-9]{4})([0-9]{4})([0-9]{4})([0-9]{4})/);
  let ccnum = `${groups[1]}-${groups[2]}-${groups[3]}-${groups[4]}`;
  res.json({
    card: mail.setCard(ccnum,randomGen.generateRandomString(8),"issuing")
  });
});

module.exports = router;
