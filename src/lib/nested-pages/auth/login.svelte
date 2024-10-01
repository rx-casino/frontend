<script>
    import { goto } from "$app/navigation";
    import { app } from "$lib/store/screen.js";
     let password = ""
     let email = ""

   const handleRoute = ((route)=>{
        goto(`${$app.url === "/" ? "" : $app.url}?modal=auth&tab=${route}`)
        let obj = {
            modal: "auth",
            tab: route
        }
        $app.searchUrl = obj
        app.set($app)
    })

</script>


<div id="login" class="sc-bZSZLb iyEiUf jOrhkb">

    <div class="box">
        <div class="sc-ezbkAF kDuLvp input ">
            <div class="input-label">Email Address</div>
            <div class="input-control" >
                 <!-- svelte-ignore a11y-positive-tabindex -->
                <input type="text" tabindex="1" autocomplete="off" placeholder="Email" bind:value={email}>
            </div>
        </div>
        <div class="sc-ezbkAF kDuLvp input sc-bYoBSM ixxYMF">
            <div class="input-label">
                <div style="flex: 1 1 0%;">Login Password</div>
                <a class="forget" href="/forget">Forgot password?</a>
            </div>
            <div class="input-control" >
                 <!-- svelte-ignore a11y-positive-tabindex -->
                <input type="password" autocomplete="off" tabindex="2"   
                placeholder="Login Password" bind:value={password}>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_View"></use>
                </svg>
            </div>
        </div>
    </div>
    <hr>
    <div class="buttons">
        <button class="sc-iqseJM sc-bqiRlB cBmlor fnKcEH button button-big">
            <div class="button-inner">Sign in</div>
        </button>
        <button on:click={()=> handleRoute("sign-up")} class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big signup oskks">
            <div class="button-inner">
                <span>Sign up</span>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Arrow"></use>
                </svg>
            </div>
        </button>
    </div>
</div>