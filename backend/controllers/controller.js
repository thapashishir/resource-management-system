const Resource = require("../models/model");

exports.health_check = function (req, res) {
    res.send('API Live.');
};

exports.add_resource = function (req, res) {
    
    let reqData = {
        title : req.body.title,
        category: req.body.category,
        url: req.body.url,
        description: req.body.description
    }
    let resource = new Resource(reqData);

    resource.save((err) => {
        if (err) res.json({msg: err, status: 500});
        res.json({msg: 'New resource added successfully.', status: 200});
    });
};

exports.list_resource = function(req,res){
    Resource.find({}, (err, result) => {
        if (err) res.json({msg: err, status: 500});
        res.json({msg: 'Data recevied successfully.', status: 200, data: result});
    });
};


exports.get_resource_details = function(req,res){
    Resource.findById(req.params.id, (err, result) => {
        if (err) res.json({msg: err, status: 500});
        console.log(result)
        res.json({msg: 'Data recevied successfully.', status: 200, data: result});
    });
};

exports.update_resource = function (req, res) {
    Resource.findByIdAndUpdate(req.body._id, {$set: req.body},function (err, resource) {
        if (err)  res.json({msg: err,status: 500});
        res.json({msg : '', status:''});
    });
};

exports.delete_resource = function (req, res) {
    Resource.findByIdAndRemove(req.params.id, function (err) {
        if (err) res.json({msg: err, status: 500});
        res.json({msg: 'Resource Deleted Successfully. ', status: 200});
    })
};


