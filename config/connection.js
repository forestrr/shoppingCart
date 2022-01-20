const mongoClient = require('mongodb').MongoClient;
const state = {
    db:null
}
module.exports.connect = (done) =>{
    const url = 'mongodb://localhost:27017'
    const dbname = 'shopping'
    // const port='27017'
    
    mongoClient.connect(url,(err,data) => {
        if (err) return done(err)
        state.db=data.db(dbname)
        done()
    })
}
module.exports.get = ()=>{
    return state.db 
}
