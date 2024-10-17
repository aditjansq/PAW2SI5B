var express = require('express');
var router = express.Router();

const BukuController = require("../controller/buku");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

// input data

router.post('/', BukuController.createBuku);

// select data

router.get('/', BukuController.readBuku);

// delete data
router.delete('/:id', BukuController.deleteBuku);

// update data

router.put('/:id', BukuController.updateBuku);


module.exports = router;
