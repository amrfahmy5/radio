var io ;
let connections = []
module.exports = {
    connect : function (ioo) {
        io=ioo
        let user_id = 1 
        io.sockets.on('connection', function(socket){
            connections.push({
                "socked":socket,
                "user_id":user_id
            })
            console.log('Connected: %s sockets connected', connections.length); 
            socket.on('disconnect',function(data){
                connections.splice(connections.indexOf({socket,user_id}),1)
                console.log('Disconnected: %s sockets connected',connections.length);
            });
        })
        return this;
    },
    newProgram :  function(program){
        io.sockets.emit("new program", {"program":program});
        return this ;
    },
    newEpisode :  function(eposide){
        io.sockets.emit("new eposide", {"eposide":eposide});
        return this ;
    },
    specficUsers:function(users,message){
        users.forEach(user => {
            connections.forEach(conn => {
                if(conn.user_id==user.id)
                {
                    io.to(conn.socked.id).emit('new message to user',message);
                    break;
                }
            });
            
        });
    }
}