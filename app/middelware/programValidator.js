var formidable = require('formidable');
exports.createValidate = (req, res, next) => {
    next()
    /*
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(fields.title)
        
        if (fields.title&&fields.description&&fields.show_date&&files.file.name&&files.file2.name)
            next();
        else 
            res.send("title,desciption,show data and file is required")
    })
    */
}
exports.updateValidate = (req, res, next) => {
    next()
    /*
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (fields.title&&fields.description&&fields.show_date&&files.file.name&&fields.program_id)
        next();
        else 
            res.send("title,desciption,show data and file is required")
    })
    */
    
}
exports.searchValidate = (req, res, next) => {
    if (req.query.tableName)
        next();
    else 
        res.send("tableName is required")
}

exports.searchValidate = (req, res, next) => {
    if (req.query.tableName)
        next();
    else 
        res.send("tableName is required")
}

exports.deleteVlidate = (req, res, next)=>{
    if (req.query.program_id)
        next();
    else 
        res.send("program_id is required")
}

exports.getVlidate = (req, res, next)=>{
    if (req.query.program_id)
        next();
    else 
        res.send("program_id is required")
}