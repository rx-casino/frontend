<script>
    import "../../styles/component/navbar.css";
    import { app , theme, api_script} from "$lib/store/screen.js";
    import MobileMenu from "./mobileMenu.svelte";
    import { goto } from "$app/navigation";
    import UserSettingWrap from "./navbar-components/user-setting-wrap.svelte";
    $: _userSettingWrap = false
    $: user = $api_script.user
    const handleChatScren = (()=>{
        $app.updateChatClass("clicked")
        app.set($app)
    })

    const handleCloseMenu = (()=>{
        $app.isMobileMenu = false
        app.set($app)
    })

    const handleMenuRoutes = ((event)=>{
        window.open(event.detail, '_self', 'noopener noreferrer');
        handleCloseMenu()
    })

    const handleOpenMenu = (()=>{
        $app.isMobileMenu = true
        app.set($app)
    })

    const handleRoute = ((modal, route)=>{
        goto(`${!$app.url ? "/" : $app.url === "/" ? "" : $app.url}?modal=${modal}&tab=${route}`)
    })

</script>

{#if $app.screen < 621 && $app.isMobileMenu}
    <MobileMenu on:close={handleCloseMenu} on:route={handleMenuRoutes}/>
{/if}

{#if $app.screen > 621}
<div id="header" class="sc-gVkuDy gAvMHL {$theme && "kCKrbU"}">
    <div class="header-wrap">
        <div class="header">
            <div class="sc-hGnimi ftyLxH left"></div>
            {#if !$api_script.is_login}
                <div class="login-in">
                    <button on:click={()=> handleRoute("auth","login")} class="sign-in">Sign in</button>
                    <button on:click={()=> handleRoute("auth","sign-up")} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                        <div class="button-inner">Sign up</div>
                    </button>
                    <button on:click={handleChatScren} id="chat" class="sc-eicpiI PGOpB">
                        <div class="chat-btn ">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Chat"></use>
                            </svg>
                            <div class="sc-fotOHu gGSOuF badge ">99</div>
                        </div>
                    </button>
                </div>
            {/if}
            {#if $api_script.is_login}
               <div class="sc-DtmNo euzHLF right">
                <div class="sc-gjNHFA juteh wallet-enter">
                    <div class="sc-fmciRz LQlWw">
                        <div class="sc-iFMAIt icGouR">
                            <div class="sc-eXlEPa boxpOO">
                                <img class="coin-icon" alt="" src="{$api_script.default_wallet?.icon}">
                                <span class="currency">{$api_script.default_wallet?.name}</span>
                                <!-- <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_Arrow"></use>
                                </svg> -->
                            </div>
                            <div class="sc-Galmp erPQzq coin notranslate balance">
                                <div class="amount">
                                    <span class="amount-str">{$api_script.default_wallet?.amount}</span>
                                </div>
                            </div>
                        </div>
                        <button on:click={()=> handleRoute("wallet", "deposit")} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
                            <div class="button-inner">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_Wallet"></use>
                                </svg>
                                <span>Wallet</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="sc-gnnDb fWkueO">
                    <div class="user-wrap">
                        <a href="{`${!$app.url ? "/" : $app.url === "/" ? "" : $app.url}?modal=profile&tab=main&id=${user?.user_id}`}">
                            <img class="avatar " alt="" src="{$api_script.user?.profile_image}">
                        </a>
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div on:mouseenter={()=> _userSettingWrap = true} on:mouseleave={()=> _userSettingWrap = false} class="svg">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Menu"></use>
                            </svg>
                            {#if _userSettingWrap}
                                <UserSettingWrap />  
                            {/if}
                        </div>
                    </div>
                </div>
                <!-- <button class="sc-dcgwPl bbYXSv private-chat">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Mail"></use>
                    </svg>
                </button>
                <button id="notice" class="sc-ksHpcM kultDa notice">
                    <div class="notice-btn ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Notice"></use>
                        </svg>
                        <div class="sc-fotOHu gGSOuF badge ">2</div>
                    </div>
                </button> -->
                <button on:click={handleChatScren} id="chat" class="sc-eicpiI PGOpB">
                    <div class="chat-btn ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Chat"></use>
                        </svg>
                        <div class="sc-fotOHu gGSOuF badge ">99</div>
                    </div>
                </button>
                </div>
            {/if}
        </div>
    </div>
</div>
{/if}


<!-- =========================== Mobile ======================== -->
{#if $app.screen < 621}
<div class="sc-hJhJFJ jVgBRe" style="transform: translate3d(0px, 0%, 0px);">
    <div class="login-top">
        <div class="logo-wrap">
            <img alt="logo" src="{$app.smallLagos}">
        </div>
        <button on:click={handleOpenMenu} class="sc-bQtKYq cUTdQJ">
            <span class="open-wrap">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Tighten"></use>
                </svg>
            </span>
        </button>
        <div class="header-login">
            <button on:click={()=> handleRoute("login")} class="sign-in">Sign in</button>
            <button on:click={()=> handleRoute("sign-up")} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                <div class="button-inner">Sign up</div>
            </button>
        </div>
    </div>
</div>
{/if}
