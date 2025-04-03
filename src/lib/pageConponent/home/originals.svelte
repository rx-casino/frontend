<script>
 import { originals } from "$lib/component/games.js";

</script>

<div class="sc-bjeSbO krOlmx grid-list">
    {#each originals as game}
    <div class="sc-gfqkcP epfPPG bot-view {game.view ? "super-block" : ""}  game-RouletteSingle">
        <a class="sc-hKTqa dbJiKC game-item-wrap " href="/{game.route}">
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
                <a class="item" href="/{game.route}">{game.name}</a>
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