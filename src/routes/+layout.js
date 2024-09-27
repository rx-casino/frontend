import { browser } from '$app/environment';
import { theme } from '$lib/store/screen.js';
import { app } from '$lib/store/screen';
import { ScreenScript } from '$lib/component/screenConfig.js';

/** @type {import('./$types').PageLoad} */
export function load({ route, fetch }) {
    const _app = new ScreenScript()
    app.set(_app)
    if(browser){
        const theme = localStorage.getItem("theme") || ""
        _app.themeConfig(theme)
    }
    return 
}