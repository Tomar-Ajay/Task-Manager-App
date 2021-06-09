const mongoose = require('mongoose')

var uri = MONGO_KEY

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
