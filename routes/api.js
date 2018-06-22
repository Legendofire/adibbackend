let express = require("express");
let router = express.Router();

let urlModel = require("../models/urls");

/* Create Shortened URL */
router.post("/api/create", function(req, res, next) {
  console.info('Preparing Shorthand Url');
  let shorthand =
    urlModel.storeShorthandURL(req.body.original_url, req.body.shorthand) ||
    urlModel.storeShorthandURL(req.body.original_url);
  console.info('Finished Preparing Shorthand Url');
  res.status(201);
  res.json({
    shorthand: shorthand
  });
});

router.get("/:shorthand", function(req, res, next) {
  console.info('Searching for the Shorthand Url');
  let original_url = urlModel.getOriginalUrl(req.params.shorthand);
  if(!original_url){
    console.log('Didn\'t find the Shorthand Url')
    res.status(400);
    res.send("invalid shorthand");
  }else{
    console.log('Found the Shorthand Url');
    res.redirect(urlModel.getOriginalUrl(req.params.shorthand));
  }
});

module.exports = router;
