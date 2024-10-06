
export class ScreenScript{
    constructor(){
        this.theme = "darken"
        this.sideBar = "sidebar-fold"
        this.openCLass = "side-unfold"
        this.closeClass = "side-fold"
        this.chatClass = ""
        this.isSideClass  = ""
        this.chatIsSideOpen  = false
        this.sideHasExpand = 0
        this.sideFold = 62
        this.empty_img = "https://static.nanogames.io/assets/empty.acd1f5fe.png"
        this._404_img = "https://static.nanogames.io/assets/notfound.5d76812f.png"
        this.sideUnFold = 226
        this.screen = 0
        this.newScreen = 0
        this.chatBoxExpand = 0
        this.smallLagos =  new URL('$lib/component/rx-casino-logo.png', import.meta.url).href
        this.largeLogos = new URL('$lib/component/rx-casino-logo.png', import.meta.url).href
        this.isMobileMenu = false
        this.searchUrl = ""
        this.url = ""
        this.preload = true
    }
    themeConfig(theme){
        this.theme = theme
        document.body.className = `${this.theme} ${this.isSideClass} ` + this.chatClass
    }
    screenConfig(sreen){
        if(sreen  > 1600){
            this.updateChatClass()
        }
        else if(sreen  > 1220){
            this.sideHasExpand = this.sideUnFold
            this.isSideClass = this.openCLass
        }
        else if(sreen  > 621){
            this.sideHasExpand = this.sideFold
            this.isSideClass = this.closeClass
        }
        else{
            this.sideHasExpand = ""
            this.isSideClass = ""
            this.chatClass = ""
        }
        document.body.className = `${this.theme} ${this.isSideClass} ` + this.chatClass
        this.screen = sreen
    }

    screenResize(ens){
        this.screenConfig(ens)
        let el = document.documentElement
        el.style.fontSize = `${this.screen > 621 ? 16 : this.screen > 560 ?  23 : this.screen > 500 ? 21.34 : this.screen > 440 ? 17.54 : this.screen > 300 ?  13.5 : 11.5}px`;
    }

    sizeConfiq(ens){
        if(ens > 1220){
           this.isSideClass = this.openCLass
        }
        document.body.className = `${this.theme} ${ens > 1220 ? this.openCLass : ens > 621 ? this.closeClass : ""} ` + this.chatClass
        this.screenConfig(ens)
        let el = document.documentElement
        el.style.fontSize = `${this.screen > 621 ? 16 : this.screen > 560 ?  23 : this.screen > 500 ? 21.34 : this.screen > 440 ? 17.54 : this.screen >  300 ?  13.5 : 11.5}px`;
    }
    updateChatClass(click){
        if(this.chatClass && this.screen < 1600){
            this.chatClass = ""
            this.chatBoxExpand = 0
        }
        else if(this.chatClass && click){
            this.chatClass = ""
            this.chatBoxExpand = 0
        }
        else{
            this.chatClass = "has-chat"
            this.chatBoxExpand = 360
        }
        document.body.className = this.theme + ` ${this.isSideClass} ` + this.chatClass
    }
}


