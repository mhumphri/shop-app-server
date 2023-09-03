var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    dates: "dgdgd1",
    timeSlots: "dkdjdj",
  },
  {
    dates: "dgdgd2",
    timeSlots: "dkdjdj",
  }
  ,
  {
    dates: "dgdgd3",
    timeSlots: "dkdjdj",
  }
]);
});

module.exports = router;
