import { browser } from '$app/environment';
import { socket } from "$lib/store/socket.js"
import { Api_Script } from '$lib/index.js';
import { app, api_script } from '$lib/store/screen';
import { ScreenScript } from '$lib/component/screenConfig.js';
import { getCookie } from "$lib/store/cookies";
import { SocketScript } from '$lib/socket/socket.io.js';

/** @type {import('./$types').PageLoad} */
export async function load({ route }) {
    const _apiScript = new Api_Script()
    const _app = new ScreenScript()
    const _socket = new SocketScript()
    if(browser){
        setAPI_url(_apiScript, _socket )
        const _secret = getCookie("secret")
        if(_secret){
          await  _apiScript.profile(_secret)
        }
        _app.url = route.id
        // const _searchUrl = setUrlObject()
        // _app.searchUrl = _searchUrl
        const theme = localStorage.getItem("theme") || ""
        _app.themeConfig(theme)
    }
    app.set(_app)
    return 
}

const setUrlObject = (()=>{
    // const queryString = window.location.search;
    // const params = new URLSearchParams(queryString);
    // const paramsObj = {};
    // params.forEach((value, key) => {
    //     paramsObj[key] = value;
    // });
    // return paramsObj 
})

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