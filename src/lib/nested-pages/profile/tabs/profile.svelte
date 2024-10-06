<script>
    import { goto } from "$app/navigation";
    import Badges from "$lib/component/badges.svelte";
    import { app, api_script} from "$lib/store/screen.js";
    export let user

function formatDate(data) {
    const now = new Date(data);
    // Get month, day, and year
    let month = now.getMonth() + 1; // getMonth() is zero-based, so we add 1
    let day = now.getDate();
    let year = now.getFullYear();
    return `${month}/${day}/${year}`;
}

</script>
<div class="sc-dkPtRN jScFby scroll-view sc-bQFuvY wihpY user__profile">
    <div class="sc-dpAhYB kqEjrM">
        <div class="user-info">
            <button class="like button">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Like"></use>
                </svg>
                 {user.user?.vip_level}
                </button>
                {#if $api_script.user.user_id === user.user?.user_id}
                    <button on:click={()=> goto(`${!$app.url ? "/" : $app.ur === "/" ? "" : $app.url}?modal=profile&tab=edit&id=${$api_script.user?.user_id}`)} class="button edit">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Edit"> </use>
                        </svg>
                    </button>
                {/if}
                <div class="avatar-box">
                    <img alt="" class="avatar " src="{user.user?.profile_image}">
                </div>
                <div class="name-box">
                    <div class="user-name">{user.user?.username}</div>
                </div>
                <div class="sc-khQegj fPtvsS user-level levelnums_0">
                    <Badges />
                </div>
            </div>
        </div>
        <div class="sc-gXRojI sc-czvZiG bRYT jTMRvT self">
            <div class="module-name">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-name">
                    <use xlink:href="#icon_Medal"></use>
                </svg> Medals<div class="total">0</div>
                <button class="detail-button">Details<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Arrow"></use>
                </svg>
            </button>
        </div>
        <div class="content">
            <div class="scroll">
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_1.c87ad7ad.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_2.f40a41f6.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_3.bf42dfa3.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_4.c845bc7e.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_5.7e08d516.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_6.b5ec5404.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_7.1e39e201.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_8.65991297.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_17.bbbdfc92.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_10.19cd9ddc.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_11.0ec85ddb.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_12.7f2dc23f.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_13.1cc45284.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_14.c072f644.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_15.53c0901a.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_16.65edd97c.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_17_ETH.4684f7c4.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_17.bbbdfc92.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_17.bbbdfc92.png" class="img locked">
                </div>
                <div class="item ">
                    <img alt="" src="https://static.nanogames.io/assets/achieve_17_BTC.a5992a94.png" class="img locked">
                </div>
            </div>
        </div>
        </div>
    <div class="sc-gXRojI sc-kMyqmI bRYT kaqGcp">
        <div class="module-name">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-name">
                <use xlink:href="#icon_Statistics"> </use>
            </svg>
            Statistics
            <button class="hover">
                Details
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-right">
                    <use xlink:href="#icon_Arrow"></use>
                </svg>
            </button>
        </div>
    <div class="content">
        <div class="sc-bGaVxB gvTPwc">
            <div class="item">
                <div class="item-type darken">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon wins-icon">
                        <use xlink:href="#icon_Bet">
                            
                        </use>
                    </svg>Total Wins</div>
                    <div class="item-value">{user.user?.total_wagered}</div>
                </div>
                <div class="item">
                    <div class="item-type darken">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon bets-icon">
                            <use xlink:href="#icon_Coin"></use>
                        </svg>Total Bets</div>
                        <div class="item-value">{user.user?.total_wagered}</div>
                    </div>
                    <div class="item">
                        <div class="item-type darken">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon wagered-icon">
                                <use xlink:href="#icon_TotalWager"></use>
                            </svg>Total Wagered</div>
                            <div class="item-value">{user.user?.total_wagered} USD</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-gXRojI sc-kszsFN bRYT cWmEHH">
                <div class="module-name">Top 3 Favorite Games</div>
                <div class="sc-eCImPb cuPxwd empty ">
                    <img alt="" src="https://static.nanogames.io/assets/empty.acd1f5fe.png">
                    <div class="msg">Oops! There is no data yet!</div>
                </div>
                    <!-- <div class="content">
                    <div class="content-item">
                        <div class="cover-box" style="background-image: url(&quot;https://img2.nanogames.io/game/image/f186c5d0-ea85-4c10-875f-d588f606cba9.png&quot;);">
                        </div>
                        <div class="info">
                            <div class="game-name">Hash Dice</div>
                            <div class="desc darken">HashDice, a probability game established by blockchain hash value calculation and algorithm, provides more fun with bet and prediction, in which the closer the number rolled by players to the random number, the higher the probability winning.</div>
                        </div>
                        <div class="bets">
                            <div class="type darken">Wagered</div>
                            <div class="value">$ 0</div>
                        </div>
                    </div>
                    <div class="content-item">
                        <div class="cover-box" style="background-image: url(&quot;https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png&quot;);">
                        </div>
                        <div class="info">
                            <div class="game-name">Mines</div>
                            <div class="desc darken">Join in on the Mines with one of our most popular and beloved games! Inspired by the classic Minesweeper, Mines will simply reveal the gems and avoid the bombs to increase your payout multiplier. With the freedom to cash out at any point of the game, the crypto gambling experience offered by Mine is second to none at any crypto casino!</div></div><div class="bets">
                                <div class="type darken">Wagered</div>
                                <div class="value">$ 0</div>
                            </div>
                        </div>
                        <div class="content-item">
                            <div class="cover-box" style="background-image: url(&quot;https://img2.nanogames.io/game/image/5ab9c93b-8f99-4ff8-94ae-e412357578a6.png&quot;);">
                            </div>
                            <div class="info">
                                <div class="game-name">Crash</div>
                                <div class="desc darken">CRASH is an online multiplayer blockchain guessing game that made as an increasing curve that may crash at any time.</div>
                            </div>
                            <div class="bets">
                                <div class="type darken">Wagered</div>
                                <div class="value">$ 0</div>
                            </div>
                        </div>
                    </div> -->
                </div>
                <div class="sc-gXRojI sc-cBIieI bRYT hlBKEq">
                    <div class="module-name">Contest</div>
                    <div class="sc-eCImPb cuPxwd empty ">
                        <img alt="" src="https://static.nanogames.io/assets/empty.acd1f5fe.png">
                        <div class="msg">Oops! There is no data yet!</div>
                    </div>
                </div>
                <div class="joined">Joined on&nbsp;{formatDate(user.joined_at)}</div>
            </div>