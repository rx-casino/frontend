import { browser } from '$app/environment';
import { theme } from '$lib/store/screen.js';
import { app } from '$lib/store/screen';
import { ScreenScript } from '$lib/component/screenConfig.js';

/** @type {import('./$types').PageLoad} */
export function load({ route, fetch }) {
    const _app = new ScreenScript()
    if(browser){
        _app.url = route.id
        const _searchUrl = setUrlObject()
        _app.searchUrl = _searchUrl
        const theme = localStorage.getItem("theme") || ""
        _app.themeConfig(theme)
    }
    app.set(_app)
    return 
}

const setUrlObject = (()=>{
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const paramsObj = {};
    params.forEach((value, key) => {
        paramsObj[key] = value;
    });
    return paramsObj 
})