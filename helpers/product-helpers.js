var db = require('../config/connection')
var collection=require('../config/collections')

module.exports = {
    addProduct: (product,callback) => {
        //console.log(product);

        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data) => {
            //console.log(data);
            callback(data.insertedId)
        })
    },
    getAllProducts:() => {
        return new Promise(async(resolve, reject) => {
            let products =await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            //console.log(products)
            
            console.log(products.name);
            
            resolve(products)
        })
    }
}