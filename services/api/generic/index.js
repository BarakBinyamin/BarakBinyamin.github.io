const express = require('express')
const router  = express.Router()

router.get('*', (req, res) => {
    res.send({"status":"Hello!"})
})
router.post('*', (req, res) => {
    res.send({"status":"Hello!"})
})

module.exports = router