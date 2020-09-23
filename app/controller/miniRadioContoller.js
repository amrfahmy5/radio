var Program = require('../models/Program')
var Episode = require('../models/Episode')


exports.main = (req, res) => {
    Program.getAllPrograms((err, programs) => {

        if (!err) {
            for (let index = 0; index < programs.length; index++) {
                Episode.findByProgramId(programs[index].program_id, (error, eposides) => {
                    if (!error)
                        programs[index].eposides = eposides;
                    if (index == programs.length - 1)
                        // res.send(programs)
                        res.render('miniRadio/program', { programs })
                })
            }
        }
        else {
            res.status(401).json({
                status: "faild to get praogram ",
                Error: err
            })
        }
    });
}

exports.specifProgram = (req, res) => {
    let program_id = req.param("program_id");
    Program.findProgramById(program_id, (err, programs) => {

        if (!err) {
            Episode.findByProgramId(programs[0].program_id, (error, eposides) => {
                if (!error) {
                    programs[0].eposides = eposides;
                    res.render('miniRadio/program', { programs })
                }
            })
        }
        else {
            res.status(401).json({
                status: "faild to get praogram ",
                Error: err
            })
        }
    });
}