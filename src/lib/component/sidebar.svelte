<script>
    import "../../styles/component/sidebar.css"
    import { app } from '$lib/store/screen';
    import { page } from "$app/stores";
    import MobileMenu from "./mobileMenu.svelte";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    export let resizeScreen;

    $: route = $page?.url.pathname
    $: is_originals = false
    $: is_hover_lucky_spin = false
    $: is_light_mode = $app.theme === "darken"

    function goToExternalSite(route) {
        // window.open(route, '', 'noopener noreferrer');
        goto(route)
    }

    const handleThemeSwitch = ((mode)=>{
        if(browser){
            localStorage.setItem("theme", mode);
            $app.themeConfig(mode)
        }
        is_light_mode = mode === "darken"
    })

</script>

{#if resizeScreen > 621}
<div id="sidebar" class="sc-jHkVzv eTxQfM {$app.sideHasExpand === $app.sideFold ? "fold" : "unfold"} ">
    <div class="{$app.sideHasExpand === $app.sideFold ? "small-sidebar" : "large-sidebar"} hidden-scroll-y">
        <div class="{$app.sideHasExpand === $app.sideFold ? "sc-bilyIR ioXbGd" : "sc-uojGG hksQGj"}">
            <div class="tab-more">
                <div class="tab-item select small-icon">
                    <img alt="icon" src="{$app.sideHasExpand === $app.sideFold ? $app.smallLagos : $app.largeLogos}">
                </div>
            </div>
        </div>
    
        <button on:click={()=> goToExternalSite("/")} class="sc-iNGGcK knLCVT menu-item {route === "/"  ? "select" : ""} " >
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>Home</span>
                {/if}
            </div>
        </button>

        <button on:mouseenter={()=> is_originals = true} on:mouseleave={()=> is_originals = false} class="sc-iNGGcK sc-eJwWfJ knLCVT beCBEn menu-item ">
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/originalcasino.bb7966a7.png">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>RX Originals</span>
                {/if}
            </div>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon right  {$app.sideHasExpand !== $app.sideFold ? "" : "right-fold"}">
                <use xlink:href="#icon_Arrow"></use>
            </svg>
            {#if is_originals}
            <div class="game-list"> 
                <div class="list-shadow hidden-scroll-y">
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_RouletteSingle"></use>
                            </svg>
                        </div>
                        <span class="game-name">RouletteSingle</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Crash"></use>
                            </svg>
                        </div>
                        <span class="game-name">Crash</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_ClassicDice"></use>
                            </svg>
                        </div>
                        <span class="game-name">Classic Dice</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Mines"></use>
                            </svg>
                        </div>
                        <span class="game-name">Mines</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_UltimateDice"></use>
                            </svg>
                        </div>
                        <span class="game-name">Ultimate Dice</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_SlotsOrientalBeauties"></use>
                            </svg>
                        </div>
                        <span class="game-name">Beauties</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Plinko"></use>
                            </svg>
                        </div>
                        <span class="game-name">Plinko</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_SlotsCave"></use>
                            </svg>
                        </div>
                        <span class="game-name">Cave</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Wheel"></use>
                            </svg>
                        </div>
                        <span class="game-name">Wheel</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_SlotsSword"></use>
                            </svg>
                        </div>
                        <span class="game-name">Sword</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Roulette"></use>
                            </svg>
                        </div>
                        <span class="game-name">Roulette</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_VideoPoker"></use>
                            </svg>
                        </div>
                        <span class="game-name">Video Poker</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Limbo"></use>
                            </svg>
                        </div>
                        <span class="game-name">Limbo</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Baccarat"></use>
                            </svg>
                        </div>
                        <span class="game-name">Baccarat</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Blackjack"></use>
                            </svg>
                        </div>
                        <span class="game-name">Blackjack</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Hilo"></use>
                            </svg>
                        </div>
                        <span class="game-name">Hilo</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_HashDice"></use>
                            </svg>
                        </div>
                        <span class="game-name">Hash Dice</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_KenoSingle"></use>
                            </svg>
                        </div>
                        <span class="game-name">Keno Single</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_SlotsEgyptianAdventure"></use>
                            </svg>
                        </div>
                        <span class="game-name">Egyptian</span>
                    </div>
                    <div class="sc-jeraig jtlPkX game-item ">
                        <div class="game-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Keno"></use>
                            </svg>
                        </div>
                        <span class="game-name">Keno</span>
                    </div>
                </div>
            </div>
            {/if}
  
            <!-- <div class="icon-list"> 
                <div class="list-shadow hidden-scroll-y">
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_RouletteSingle"></use>
                        </svg>
                    </div>
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Crash"></use>
                        </svg>
                    </div>
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_ClassicDice"></use>
                        </svg>
                    </div>
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Mines"></use>
                        </svg>
                    </div>
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_UltimateDice"></use>
                        </svg>
                    </div>
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_SlotsOrientalBeauties"></use>
                        </svg>
                    </div>
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Plinko"></use>
                        </svg>
                    </div>
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_SlotsCave"></use>
                        </svg>
                    </div>
                    <div class="game-icon-item ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Wheel"></use>
                        </svg>
                    </div>
                </div>
            </div>   -->
        </button>

        <button on:click={()=> goToExternalSite("/slots")} class="sc-iNGGcK knLCVT menu-item {route === "/slots" ? "select" : ""}" >
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/slots.42749df8.png">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>slots</span>
                {/if}
            </div>
        </button>
        {#if $app.sideHasExpand === $app.sideFold}
        <div class="sc-gGCDDS fxTzbi fold">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="more" on:mouseenter={()=> is_hover_lucky_spin = true} on:mouseleave={()=> is_hover_lucky_spin = false}>
                <div class="sc-clIzBv dLxTob item">
                    <button class="sc-nVkyK kMVtJZ bonus-item">
                        <div class="enter-animate active">
                            <img class="img-top" src="https://static.nanogames.io/assets/spin.99a0cd5f.png" alt="">
                            <img class="img-bot" src="https://static.nanogames.io/assets/pointer.0d70e6f4.png" alt="">
                            <img class="img-bg" src="https://static.nanogames.io/assets/spin_default.2e122b5a.png" alt="">
                        </div>
                    </button>
                </div>
                <div class="sc-clIzBv dLxTob item {!is_hover_lucky_spin ? "hover-item" : ""} ">
                    <button class="sc-ehCJOs dpTURZ bonus-item bonus-locked">
                        <div class="right-tip locked">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-locked">
                                <use xlink:href="#icon_Locked"></use>
                            </svg>
                        </div>
                        <div class="enter-animate ">
                            <img class="img-bg" alt="" src="https://static.nanogames.io/assets/pig.e37fd6d9.png">
                        </div>
                    </button>
                </div>
                <div class="sc-clIzBv dLxTob item {!is_hover_lucky_spin ? "hover-item" : ""}">
                    <button class="sc-hiwPVj hUncUa bonus-item bonus-locked">
                        <div class="right-tip locked">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-locked">
                                <use xlink:href="#icon_Locked"></use>
                            </svg>
                        </div>
                        <div class="enter-animate ">
                            <img class="img-bg" src="https://static.nanogames.io/assets/Recharge_d.879d9b90.png" alt="">
                        </div>
                    </button>
                </div>
                <div class="sc-clIzBv dLxTob item hover-item">
                    <button class="shitcode">
                        <img alt="shitcode" src="https://static.nanogames.io/assets/shitcode.dcc7e39e.svg"></button>
                    </div>
                </div>
            </div>
            {/if}
        {#if $app.sideHasExpand !== $app.sideFold}
            <div class="sc-lcepkR kxuJwp actions">
                <div class="sc-clIzBv dLxTob">
                    <button class="sc-nVkyK kMVtJZ bonus-item">
                        <div class="enter-animate active">
                            <img class="img-top" src="https://static.nanogames.io/assets/spin.99a0cd5f.png" alt="">
                            <img class="img-bot" src="https://static.nanogames.io/assets/pointer.0d70e6f4.png" alt="">
                            <img class="img-bg" src="https://static.nanogames.io/assets/spin_default.2e122b5a.png" alt="">
                        </div>
                    </button>
                </div>
                <div class="sc-clIzBv dLxTob">
                    <button class="sc-ehCJOs dpTURZ bonus-item bonus-locked">
                        <div class="right-tip locked">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-locked">
                                <use xlink:href="#icon_Locked"></use>
                            </svg>
                        </div>
                        <div class="enter-animate ">
                            <img class="img-bg" alt="" src="https://static.nanogames.io/assets/pig.e37fd6d9.png">
                        </div>
                    </button>
                </div>
                <div class="sc-clIzBv dLxTob">
                    <button class="sc-hiwPVj hUncUa bonus-item bonus-locked">
                        <div class="right-tip locked">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-locked">
                                <use xlink:href="#icon_Locked"></use>
                            </svg>
                        </div>
                        <div class="enter-animate ">
                            <img class="img-bg" src="https://static.nanogames.io/assets/Recharge_d.879d9b90.png" alt="">
                        </div>
                    </button>
                </div>
                <div class="sc-clIzBv dLxTob">
                    <button class="shitcode">
                        <img alt="shitcode" src="https://static.nanogames.io/assets/shitcode.dcc7e39e.svg">
                    </button>
                </div>
                <div class="sc-clIzBv dLxTob">
                    <img alt="task" src="https://static.nanogames.io/assets/more_two.adc7a21d.svg">
                </div>
            </div>
        {/if}
        <button on:click={()=> goToExternalSite("/lottery")} class="sc-iNGGcK knLCVT menu-item {route === "/lottery" ? "select" : ""}" >
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/lottery.bc95b607.png">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>Lottery</span>
                {/if}
            </div>
        </button>

        <button on:click={()=> goToExternalSite("/casino")} class="sc-iNGGcK knLCVT menu-item {route === "/casino" ? "select" : ""}" >
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>Affiliate</span>
                {/if}
            </div>
        </button>

        <button on:click={()=> goToExternalSite("/vip-club")} class="sc-iNGGcK knLCVT menu-item special-nav vip {route === "/vip-club" ? "select" : ""}" >
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/vipclub.3b37e72c.png">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>VIP Club</span>
                {/if}
            </div>
        </button>

        <button on:click={()=> goToExternalSite("/help/provably-fair")} class="sc-iNGGcK knLCVT menu-item {route.includes("help") ? "select" : ""}" >
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/fairness.12d49bfb.png">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>Provably Fair</span>
                {/if}
            </div>
        </button>

        <div class="sc-eGPXGI kCbnNh"></div>

        <button on:click={()=> goToExternalSite("/my-favorite")} class="sc-iNGGcK knLCVT menu-item {route === "/my-favorite" ? "select" : ""}" >
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/myfavorite.466f0741.png">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>Favorite Games</span>
                {/if}
            </div>
        </button>

        <button on:click={()=> goToExternalSite("/recent")} class="sc-iNGGcK knLCVT menu-item {route === "/recent" ? "select" : ""}" >
            <div class="{$app.sideHasExpand === $app.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAARVBMVEUAAACNI+aTK++NJOWNI+eMI+aNJOaNJOacLOqOJ+uOJeeNJOaNJOWNJOaOI+aNJeeOJOaPJOePJ+WNJOiSJO2NI+aMI+Uq+huBAAAAFnRSTlMA2Q/5aee/uQsmUfPFopB9XEA7OBzSytsOlAAAASJJREFUWMPtlsmuwjAMRZM6Ywc6APf/P/XBAtynQOV4AQtytpGOZMe5sWk0Go2Gjm6Zgh0GG6alM3r6QHhCoVdqthGg6NacUl5dJGDcNJ4T4F23q9J54FTfnAiak/lHmgmxq/RY+LMpOHvYOlPE9WJecLki1vXHs8feYJOv6dMG2tWFG7vqCPK7GzGbdyIzYxTPIXx6L0oe0skMcKYQMQ5BePVEXSEqzgUsiOZIZCIWkWiCOxY5TMIWrceiVdgki1yI8p1HZzKsSDQgFaI7z4oThk+KuLRSxKWpmm0f9Nxs1fUzfP2qgWR4IMVPRHlePtrjyoIiRhhFjHCwMZpg46hlVFHL4c8owl/xHWk/yE9/2folQr/W6Bet769+jUaj8dP8AetcFXVRAZgCAAAAAElFTkSuQmCC">
                {#if $app.sideHasExpand !== $app.sideFold}
                    <span>Recent Play</span>
                {/if}
            </div>
        </button>

        <div class="line"></div>
    {#if $app.sideHasExpand !== $app.sideFold}
        <div class="sc-fHeRUh hhNgUw border_bottom">
            <span>Language Options</span>
            <div class="sc-jJoQJp dsRMpL select  sc-dtDOqo lfiNFq">
                <div class="select-trigger">English<div class="arrow top">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Arrow"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="sc-gSQFLo hliMGm theme">
            <div class="theme-check">
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> handleThemeSwitch("darken")} class="item {is_light_mode ? "is-active" : ""} ">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Dark"></use>
                    </svg>
                </div>
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> handleThemeSwitch("light")} class="item {!is_light_mode ? "is-active" : ""}">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Light"></use>
                    </svg>
                </div>
            </div>
            <div class="theme-word">
                <p>{!is_light_mode ? "Lightmode" : "Darkmode"}</p>
                <p>Currently</p>
            </div>
        </div>
        </div>
    {:else}
        <div class="sc-evcjhq jzXtuE">
            <div class="fold-lan">
                <span class="ttu">en</span>
                <div class="lan-wrap">
                    <div class="sc-jJoQJp gOHquD select  sc-dtDOqo lfiNFq hidden-lan">
                        <div class="select-trigger">English<div class="arrow top">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Arrow"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sc-fHeRUh hhNgUw fold-theme">
            <div class="theme-icon-wrap">
                <div class="theme-icon flex-center">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#{is_light_mode ? "icon_Dark" : "icon_Light"}"></use>
                    </svg>
                </div>
            </div>
            <div class="sc-gSQFLo dprxuS theme">
                <div class="theme-check">
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> handleThemeSwitch("darken")} class="item {is_light_mode ? "is-active" : ""} ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Dark"></use>
                        </svg>
                    </div>
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> handleThemeSwitch("light")} class="item {!is_light_mode ? "is-active" : ""}">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Light"></use>
                        </svg>
                    </div>
                </div>
                <div class="theme-word">
                    <p>{!is_light_mode ? "Lightmode" : "Darkmode"}</p>
                    <p>Currently</p>
                </div>
            </div>
        </div>
    </div>
    {/if}


    {#if $app.sideHasExpand !== $app.sideFold}
        <div class="border_bottom">
            <div class="live">
                <div class="support-icon">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Support"></use>
                    </svg>
                </div>
                <span>Live Support</span>
            </div>
        </div>
    {:else}
        <div class="sc-dkYRCH bnRVzR">
            <div class="support-wrap">
                <div class="fold-support">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Support"></use>
                    </svg>
                </div>
                <span class="hidden">Live Support</span>
            </div>
        </div>
    {/if}
    {#if $app.sideHasExpand !== $app.sideFold}
        <div class="border_bottom end"><div class="network"><span>Social Media</span><div class="sc-XxNYO hNXSBx social-links"><a class="telegram" href="https://t.me/NanoGamesOfficial" target="_blank"><img src="https://static.nanogames.io/assets/Telegram.f76d7c46.svg" class="telegram" alt=""></a><a class="github" href="https://github.com/NanoGamesio/crash/" target="_blank"><img src="https://static.nanogames.io/assets/Github.87e42b3d.svg" class="github" alt=""></a><a class="twitter" href="https://twitter.com/nanogamesio?lang=en" target="_blank"><img src="https://static.nanogames.io/assets/Twitter.ec46be69.svg" class="twitter" alt=""></a><a class="discord" href="https://discord.gg/5sWsU4d" target="_blank"><img src="https://static.nanogames.io/assets/Discord.cbf05e6a.svg" class="discord" alt=""></a></div></div></div>
    {:else}
        <div class="sc-ilfuhL bonVdK"><div class="sc-XxNYO hNXSBx social-links"><a class="telegram" href="https://t.me/NanoGamesOfficial" target="_blank"><img src="https://static.nanogames.io/assets/Telegram.f76d7c46.svg" class="telegram" alt=""></a><a class="github" href="https://github.com/NanoGamesio/crash/" target="_blank"><img src="https://static.nanogames.io/assets/Github.87e42b3d.svg" class="github" alt=""></a><a class="twitter" href="https://twitter.com/nanogamesio?lang=en" target="_blank"><img src="https://static.nanogames.io/assets/Twitter.ec46be69.svg" class="twitter" alt=""></a><a class="discord" href="https://discord.gg/5sWsU4d" target="_blank"><img src="https://static.nanogames.io/assets/Discord.cbf05e6a.svg" class="discord" alt=""></a></div></div>
    {/if}
    </div>
</div>

{/if}

