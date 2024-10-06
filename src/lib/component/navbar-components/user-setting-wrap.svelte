<script>
    import Badges from "../badges.svelte";
    import { app, api_script } from "$lib/store/screen.js";

    async function logout() {
        const res = await fetch('/logout', { method: 'POST' });
        if (res.ok) {
            window.location.href = $app.url; 
        }
    }

    $: user = $api_script.user

</script>

<div class="setting-wrap" style="opacity: 1; transform: none;">
    <div class="sc-cjrPHo emGYim">
        <div class="user-info">
            <a class="left" href="{!$app.url ? "/" : $app.url === "/" ? "" : $app.url}?modal=profile&tab=main&id=${user?.user_id}">
                <img class="avatar " alt="" src="{user?.profile_image}">
                <div class="name-level">
                    <p>{user?.username}</p>
                    <div class="level">
                        <div class="sc-khQegj fPtvsS  levelnums_0">
                            <Badges />
                        </div>
                        <div class="sc-jQrDum jouJMO user-level type-0">
                            <div class="level-wrap">
                                <span>V</span>
                                <span>{user.vip_level}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <div class="right">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Setting"></use>
                </svg>
                <p>Global Settings</p>
            </div>
        </div>
        <div class="vip-info notranslate">
            <div class="num">
                <p>vip {user.vip_level}</p>
                <p><span>Need 1 xp</span>vip 1</p>
            </div>
            <div class="vip-bg">
                <div class="bg">
                    <div class="status" style="width: 2%; background: rgb(145, 150, 168);"></div>
                </div>
                <div class="bg_status" style="color: rgb(145, 150, 168);">0%</div>
            </div>
        </div>
        <div class="link-info">
            <div class="link-item">
                <div class="hover">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_UserProfile"></use>
                    </svg>
                    User Information
                </div>
            </div>
            <div class="link-item">
                <div class="hover">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Wallet"></use>
                    </svg>
                    Wallet
                </div>
            </div>
            <div class="link-item">
                <div class="hover">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Statistics"></use>
                    </svg>
                    Statistics
                </div>
            </div>
            <div class="link-item">
                <div class="hover">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Swap"></use>
                    </svg>
                    NGSwap
                </div>
            </div>
            <div class="link-item">
                <div class="hover">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Transaction"></use>
                    </svg>
                    Transactions
                </div>
            </div>
            <div class="link-item">
                <div class="hover">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Vault"></use>
                    </svg>
                    Vault Pro
                </div>
            </div>
            <div class="link-item">
                <div class="hover">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Support"></use>
                    </svg>
                    Live Support
                </div>
            </div>
            <div class="link-item">
                <div class="hover"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Reward"></use>
                </svg>
                Reward
            </div>
        </div>
        <div class="link-item">
            <div class="hover">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Affiliate"></use>
                </svg>
                Affiliate
            </div>
        </div>
        <div class="link-item">
            <div class="hover">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_VipClub"></use>
                </svg>
                VIP Club
            </div>
        </div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={()=> logout()} class="logout">
        <span>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Logout"></use>
            </svg>
            Logout
        </span>
    </div>
</div>
</div>