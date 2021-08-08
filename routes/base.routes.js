const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => res.json({message: "Soy tu API favorito."})
)

module.exports = router;
