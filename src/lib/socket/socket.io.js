import { io } from "socket.io-client";
import { chats } from "$lib/store/screen.js";

export class SocketScript{
    constructor(){
        this.io = ""
    }
    server(url){
       this.io = io(`${url}`)
       this.io.emit("fetch-defult", "default")
       this.io.on("chats",  data =>{
            chats.set(data)
       })
       this.io.on("default-chat",  data =>{
            chats.set(data)
        })
    }
    public_chat(chat){
        this.io.emit("public-chat", chat)
    }
}