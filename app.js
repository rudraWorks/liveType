const express = require('express')
const generalRouter = require('./routes/generalRouter')
const socketio = require('socket.io')
const http = require('http')
const {addUser,removeUser,getUser,getUsersInRoom} = require('./utils/users')

const app = express()

const server = http.createServer(app)
const io = socketio(server) 

const words = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
let testPara=""
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))


app.use(generalRouter)

io.on('connection',(socket)=>{

    // io.emit('test','hi')
    socket.on('join',({username,room},callback)=>{
        username=username.trim()
        room=room.trim()

        const isAdded = addUser(socket.id,username,room)
        const roomLength = getUsersInRoom(room).length
        if(isAdded==0)
        {
            return callback({error:'this username already exist in this room'})
        }
        if(roomLength>2){
            return callback({error:'this room is full'})
        }
        
        socket.join(room)
        // console.log(username+" "+room)
        let t=getUser(socket.id)
        // console.log(t)
        let userInRoom = getUsersInRoom(t.room)
        io.to(t.room).emit('updateRoomInfo',t,userInRoom)

        socket.on('startTest',()=>{
            // console.log(socket.id)
            io.to(getUser(socket.id).room).emit('clear')
            let p="";
            for(let i=0;i<30;++i)
                p+=words[randomIntFromInterval(0,words.length-1)]+" ";
            p = p.trim()
            testPara = p
            io.to(getUser(socket.id).room).emit('updateTestPara',testPara)
        })

        socket.on('updateLiveTyping',(userPara)=>{
            let score=0
            let totalScore=testPara.length
            let mn=userPara.length
            if(testPara.length<mn)
                mn=testPara.length
            for(let i=0;i<mn;++i){
                if(testPara[i]==userPara[i])
                    ++score;
            }
            if(score==totalScore){
                socket.broadcast.to(getUser(socket.id).room).emit('lose')
                socket.emit('win')
            }
            score=100*(score/totalScore)
            socket.broadcast.to(getUser(socket.id).room).emit('updateOpponentProgress',score)
            socket.emit('updateMyProgress',score)

        })
    }) 
})     

let port = process.env.PORT || 3000
server.listen(port,()=>{
    console.log('listening to port '+port)
})