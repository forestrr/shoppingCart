var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "IPHONE 11Pro",
      category: "Mobile",
      description:"ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 ",
      image:"https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_25.jpg?scl=1"
    },{
      name: "ONE PLUS 9T ",
      category: "Mobile",
      description:"ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 ",
      image:"https://img.search.brave.com/TxePGS4wonVipvh3NqtsaiEnhuTm0Om1k7lmqVzx8qw/fit/711/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/Qk4wX25zbEJYd29v/NmQwdWZSbkJ3SGFF/OCZwaWQ9QXBp"
    },{
      name: "Samsung s21",
      category: "Mobile",
      description:"ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 ",
      image:"https://img.search.brave.com/w_dnbOO4ES1csFoEyRPRMUKeuHfe6TBxxisn9Nef-zU/fit/844/225/ce/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/Z2VZZEptZElxQjdL/eXE5NDVsMjNnSGFF/SyZwaWQ9QXBp"
    },{
      name: "Redmi Note 10 pro",
      category: "Mobile",
      description:"ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 ",
      image:"https://img.search.brave.com/osuLjGa0WPuKGxpSy23uOvcsOirGdveMl2SuNqaSqKQ/fit/474/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/TGpjTjZTYmFIS0xt/STA1OE5VbWFnSGFI/YSZwaWQ9QXBp"
    },
  ]
  res.render('index', { products, admin:false});
});

module.exports = router;