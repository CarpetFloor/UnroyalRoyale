let socket = io();
let id = -1;
let name = "";

// when connected to the server, set id
socket.on("connected", ()=> {
    if(id == -1) {
        id = socket.id;
        console.log(id);
    }
});