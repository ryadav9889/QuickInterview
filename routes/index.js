const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.send({
            "message": "hiii"
    })
});

router.use("/admin", require("./admin"))




module.exports = router;