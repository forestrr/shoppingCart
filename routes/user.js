var express = require('express');
const session = require('express-session');
const productHelpers = require('../helpers/product-helpers');
const userHelper = require('../helpers/user-helper');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let user=req.session.user
   console.log(user)
  productHelpers.getAllProducts().then((products) => {
    // console.log(products);
    res.render('user/user-product', { products,user});
    
  })
})
router.get('/login',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelper.doSignup(req.body).then((response)=>{
    console.log(response)
    res.render('user/login')
  })
})
router.post('/login',(req,res)=>{
  userHelper.doLogin(req.body).then((response)=>{
    console.log(response.user)
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  }) 

})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
