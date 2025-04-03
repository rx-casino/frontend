import { browser } from '$app/environment';
import { socket } from "$lib/store/socket.js"
import { Api_Script } from '$lib/index.js';
import { api_script } from '$lib/store/screen';
import { getCookie } from "$lib/store/cookies";
import { SocketScript } from '$lib/socket/socket.io.js';

/** @type {import('./$types').PageLoad} */
export async function load({ route }) {
    const _apiScript = new Api_Script()
    const _socket = new SocketScript()
    if(browser){
        setAPI_url(_apiScript, _socket )
        const _secret = getCookie("secret")
        if(_secret){
          await  _apiScript.profile(_secret)
        }
    }
    return 
}


const setAPI_url = ((_apiScript, _socket)=>{
    let localhostUrl = "http://localhost:8000"
    let remoteUrl = "https://rx-casino.onrender.com"
    const _api = location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? localhostUrl : remoteUrl
    _apiScript.backend_url = _api
    _socket.server(_api)
    api_script.set(_apiScript)
    socket.set(_socket)
})