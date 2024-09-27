<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
    import { app } from '$lib/store/screen.js';


    const banners = [
        {img: "https://static.nanogames.io/assets/lottery.cb45faf6.png", route: "lottery"},
        {img: "https://img2.nanogames.io/banner/69/11/91/164300088660375.png", route: "crash"},
        {img: "https://img2.nanogames.io/banner/56/a6/35/164300090852476.png", route: "dice"},
        {img: "https://img2.nanogames.io/banner/04/0b/69/164300093827015.png", route: "mines"},

        {img: "https://static.nanogames.io/assets/lottery.cb45faf6.png", route: "lottery"},
        {img: "https://img2.nanogames.io/banner/69/11/91/164300088660375.png", route: "crash"},
        {img: "https://img2.nanogames.io/banner/56/a6/35/164300090852476.png", route: "dice"},
        {img: "https://img2.nanogames.io/banner/04/0b/69/164300093827015.png", route: "mines"},
    ]

    onMount(()=>{
        const swiperEl = browser && document.querySelector('swiper-container');
        const buttonEl = browser && document.querySelector('.navigation-next-banner');
        const buttonEl2 = browser && document.querySelector('.navigation-prev-banner');

        browser && buttonEl.addEventListener('click', () => {
            swiperEl.swiper.slideNext();
        });
        browser && buttonEl2.addEventListener('click', () => {
            swiperEl.swiper.slidePrev();
        });
    })
    $: screenEl = $app.newScreen

    $: view = screenEl > 1600 ? 5 : screenEl > 1100 ? 4 : screenEl > 900 ? 3 : screenEl > 600 ? 2 : 1

</script>


<div id="home-banner" class="sc-bLdqUH bPsBUR banner ">
<div class="gradient-wrap">
    <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events sc-haTkiu iyCsvj IsnnesSS">
        <swiper-container class="swiper-wrapper"        
            slides-per-view={view}
            speed={1000}
            loop={true}
            autoplay={{
            delay: 1000,
            disableOnInteraction: false,
        }} space-between="2">
            {#each banners as banner}
                <swiper-slide class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev dnfJpJ" data-swiper-slide-index="0">
                    <a class="sc-cfJLRR ktmMpR" gridnum="1" href="/{banner.route}">
                        <img src="{banner.img}" alt="banner.png" draggable="false">
                    </a>
                </swiper-slide>
            {/each}
        </swiper-container>
        <div class="sc-brSvTw kpCklu navigation-btns-wrap">
            <button class="prev navigation-prev-banner">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Arrow"></use>
                </svg>
            </button>
            <button class="navigation-next-banner">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Arrow"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
</div>