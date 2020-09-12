var express = require('express');
var router = express.Router();
var Program = require('../app/models/Program')
var Episode = require('../app/models/Episode')


router.get('/', (req, res) => {
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
});
module.exports = router
