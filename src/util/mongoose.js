module.exports = {
    multipleMongooseToObject: function(mongooseArrays)  {
        return mongooseArrays.map(mongooseArray => mongooseArray.toObject());
    },
    mongooseToObject: function(mongooseArrays)  {
        return mongooseArrays ? mongooseArrays.toObject() : mongooseArrays;
    },
}