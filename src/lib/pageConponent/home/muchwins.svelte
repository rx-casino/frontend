<script>
    import { app } from '$lib/store/screen.js';
    let logos = {
        muchWin: "https://static.nanogames.io/assets/bigprofit.ae9b1ce1.png",
        topWins: "https://static.nanogames.io/assets/topprofit.bc94f362.png"
    }

    const muchWins = [
        {won: 3000, user: "YouLuckyBitch", game: "Mines", image: "https://img2.nanogames.io/game/image/5ab9c93b-8f99-4ff8-94ae-e412357578a6.png"},
        {won: 6700, user: "Gsi Plaus", game: "Plinko", image: "https://img2.nanogames.io/game/image/ae817f12-fa67-49b8-b33e-6cafda497488.png"},
        {won: 9800, user: "Flips piles", game: "Classic Dice", image: "https://img2.nanogames.io/game/image/455dda9f-80eb-438c-958c-45c355c3c659.png"},
        {won: 5400, user: "Youshi ulo", game: "Keno Single", image: "https://img2.nanogames.io/game/image/d06bd2b7-e5c5-45c2-9f50-fe0f2c0eefdb.png"},
        {won: 6300, user: "Mu man", game: "Diamond", image: "https://img2.nanogames.io/game/image/9563e4ec-331c-4fac-a7a6-ae6e3921e860.png"},
    ]

    const topWins = [
        {won: 6700, user: "Gsi Plaus", game: "Plinko", image: "https://img2.nanogames.io/game/image/ae817f12-fa67-49b8-b33e-6cafda497488.png"},
        {won: 6300, user: "Mu man", game: "Diamond", image: "https://img2.nanogames.io/game/image/9563e4ec-331c-4fac-a7a6-ae6e3921e860.png"},
        {won: 5400, user: "Youshi ulo", game: "Keno Single", image: "https://img2.nanogames.io/game/image/d06bd2b7-e5c5-45c2-9f50-fe0f2c0eefdb.png"},
        {won: 3000, user: "YouLuckyBitch", game: "Mines", image: "https://img2.nanogames.io/game/image/5ab9c93b-8f99-4ff8-94ae-e412357578a6.png"},
        {won: 9800, user: "Flips piles", game: "Classic Dice", image: "https://img2.nanogames.io/game/image/455dda9f-80eb-438c-958c-45c355c3c659.png"},
    ]


    $: mobileTab = 0

</script>

<!-- ======================================= mobile =================================== -->


{#if $app.newScreen < 770}
<div class="sc-iRFsWr dGbYFZ" style="height:auto">
    <div class="sc-aaqME jiYpQl">
        <div class="sc-ihINtW cvKYOe sc-eSxRXt fLGcZr mobile-top-swiper">
            <div class="sc-cxpSdN kQfmQV tabs">
                <div class="tabs-navs">
                    <button on:click={()=> mobileTab = 0} class="tabs-nav {!mobileTab && "is-active"}">
                        <div class="sc-gqtqkP kwUMQi">
                            <div class="top">
                                <div class="circle">
                                    <img alt="logo" src="{logos.muchWin}">
                                </div>
                                <div class="word">
                                    <p><span style="color: rgb(231, 11, 108);">Much</span>Wow Wins</p>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button on:click={()=> mobileTab = 2} class="tabs-nav {mobileTab && "is-active"}">
                        <div class="sc-gqtqkP kwUMQi">
                            <div class="top">
                                <div class="circle">
                                    <img alt="logo" src="{logos.topWins}">
                                </div>
                                <div class="word">
                                    <p><span style="color: rgb(245, 192, 31);">Top</span>Winning Games</p>
                                </div>
                            </div>
                        </div>
                    </button>
                    <div class="bg" style="left: {mobileTab ? 50 : 0}%; right: {!mobileTab ? 50 : 0}%;"></div>
                </div>

                <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                    <swiper-container class="swiper-wrapper"        
                            slides-per-view={2}
                            speed={2000}
                            loop={true}
                            autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }} space-between="2">
                        {#each (mobileTab ? topWins : muchWins)  as win}
                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="2" style="">
                            <div class="mobile-top-games-wrap">
                                <div class="item-wrap">
                                    <div class="sc-bnOPBZ gZglJR win-game-item">
                                        <div class="sc-cxVPaa gPcmgp left">
                                            <div class="image-inner">
                                                <img alt="logo" src="{win.image}">
                                            </div>
                                        </div>
                                        <div class="right">
                                            <div class="right-word-wrap">
                                                <p class="sp">{win.user}</p>
                                            </div>
                                            <div class="right-word-wrap big-word">
                                                <p title="Won: $164">Won:<span>${win.won}</span></p>
                                            </div>
                                            <div class="right-word-wrap">
                                                <p>{win.game}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        {/each}
                    </swiper-container>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}

<div class="sc-juEPzu bIdynS" >
    <div class="sc-eZhRLC cDTAiE" style="height: 174.635px;">
        <div class="sc-eySxxw hJeVbT" style="width: 808px; transform: scale(0.919129);">
            <div class="sc-jNHqnW hDuYyE">
                <div class="sc-cxVPaa jPPoTb list-one">
                    <div class="top">
                        <div class="circle">
                            <img alt="logo" src="{logos.muchWin}">
                        </div>
                        <div class="word">
                            <p><span style="color: rgb(231, 11, 108);">Much</span>Wow Wins</p>
                        </div>
                    </div>
                    <div class="swiper swiper-initialized swiper-vertical swiper-pointer-events">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                            data-swiper-slide-index="3"
                             style="height: 126px; margin-bottom: 12px;">
                                <div class="sc-hIagIn koYMwt">
                                    <div class="item-wrap">
                                        <div class="sc-iKMXQg jhZhan win-game-item">
                                            <div class="sc-bnOPBZ fsFLBL left">
                                                <div class="image-inner">
                                                    <img alt="logo" src="https://img2.nanogames.io/game/image/cabaacf4-ab69-4685-914a-f2ea07bddda5.png">
                                                </div>
                                            </div>
                                            <div class="right">
                                                <div class="right-word-wrap">
                                                    <p class="sp hidden">Hidden</p>
                                                </div>
                                                <div class="right-word-wrap big-word">
                                                    <p title="Won: $622">Won:<span>$622.00</span></p>
                                                </div>
                                                <div class="right-word-wrap">
                                                    <p>In Gold of Sirens Bonus Buy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-wrap">
                                        <div class="sc-iKMXQg jhZhan win-game-item">
                                            <div class="sc-bnOPBZ fsFLBL left">
                                                <div class="image-inner">
                                                    <img alt="logo" src="https://img2.nanogames.io/game/image/cabaacf4-ab69-4685-914a-f2ea07bddda5.png">
                                                </div>
                                            </div>
                                            <div class="right">
                                                <div class="right-word-wrap">
                                                    <p class="sp hidden">Hidden</p>
                                                </div>
                                                <div class="right-word-wrap big-word">
                                                    <p title="Won: $622">Won:<span>$622.00</span></p>
                                                </div>
                                                <div class="right-word-wrap">
                                                    <p>In Gold of Sirens Bonus Buy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</div>