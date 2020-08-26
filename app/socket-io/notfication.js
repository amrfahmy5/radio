var io ;
module.exports = {
    connect : function (ioo) {
        io=ioo
        io.sockets.on('connection', async function (socket) {
            console.log('Connected: sockets connected');
        });
        return this;
    },
    newProgram :  function(program){
        console.log(program)
        io.sockets.emit("new program", program);
        return this ;
    },
    newEpisode :  function(eposide){
        console.log(eposide)
        io.sockets.emit("new eposide", eposide);
        return this ;
    }
}