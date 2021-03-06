const connectBusboy = require('connect-busboy');
var express = require('express');
const fileUpload = require('express-fileupload');
//const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
   productHelper.getAllProducts().then((products)=>{
      //console.log(products);
      res.render('admin/view-products', { admin: true,products})
   })

  
});
router.get('/add-product', (req, res) => {
  res.render('admin/add-product', { admin: true })
});
router.post('/add-product', (req, res) => {
    //console.log(req.body);
    //console.log(req.files.image);
    productHelper.addProduct(req.body, (id) => {

      let image = req.files.image;
      // console.log(_id)
      image.mv('./public/product-images/' + id + '.jpg', (err, done) => {
        if (!err) {
          res.render('admin/add-product', { admin: true });
        } else {
          console.log(err);
        }

      });

    });

  }
)
router.get('/delete-product/:id',(req,res)=>{
  let proId=req.params.id
  console.log(proId)
  productHelper.deleteProduct(proId).then((response)=>{
    res.redirect('/admin/')

  })
})

module.exports = router;
