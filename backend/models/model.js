const mongoose = require('mongoose');

let ResourceSchema = new mongoose.Schema(
    {
        title:{type : String},
        category: {type : String},
        url : {type : String},
        description: {type : String}

    }
)

module.exports = mongoose.model('Resource', ResourceSchema);
