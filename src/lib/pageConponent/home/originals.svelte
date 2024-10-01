<script>
let Games = [
    {name: "Crash Trenball", image: "https://img2.nanogames.io/game/image/4398e0b7-7da4-4d42-b67d-33d5f2785fc6.png", view: 0},
    {name: "Classic Dice", image: "https://img2.nanogames.io/game/image/455dda9f-80eb-438c-958c-45c355c3c659.png", view: 0},
    {name: "Crash", image: "https://img2.nanogames.io/game/image/c405f953-f7ca-4da5-8309-dcba4fc44e7d.png", view: 1},
    {name: "Plinko", image: "https://img2.nanogames.io/game/image/ae817f12-fa67-49b8-b33e-6cafda497488.png", view: 0},
    {name: "Mines", image: "https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png", view: 0},
    {name: "Video Poker", image: "https://img2.nanogames.io/game/image/42026a73-a033-4a57-bb1c-7e09fd2ea30f.png", view: 0},
]
</script>

<div class="sc-bjeSbO krOlmx grid-list">
    {#each Games as game}
    <div class="sc-gfqkcP epfPPG bot-view {game.view ? "super-block" : ""}  game-RouletteSingle">
        <a class="sc-hKTqa dbJiKC game-item-wrap " href="/roulette">
            <div class="lazy-img img">
                <img src="{game.image}" alt="">
            </div>
            <div class="hover-mask">
                <div class="house-edge">House Edge 1%</div>
                <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63">
                    <defs></defs>
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="31.3" cy="31.3" r="30.3" fill="#000" fill-opacity=".2" stroke="#E5E7EE" stroke-width="2"></circle>
                        <path fill="#F5F6F7" d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"></path>
                    </g>
                </svg>
            </div>
        </a>
        <div class="sc-fivaXQ gVplre bot-view">
            <div class="wrap">
                <a class="item" href="/roulette">{game.name}</a>
                <div class="help-btn-wrap">
                    <button>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Help"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    {/each}
    <div class="sc-ckRZPU iBmEfj"><div class="bg-img"></div></div>
    <div class="sc-ckRZPU iBmEfj"><div class="bg-img"></div></div>
    <div class="sc-ckRZPU iBmEfj"><div class="bg-img"></div></div>

</div>