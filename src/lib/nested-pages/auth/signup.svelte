<script>
    import { goto } from "$app/navigation";
    import Loader from "$lib/component/loader.svelte";
    import { app, api_script } from "$lib/store/screen.js";
     let password = ""
     let email = ""
     let ref = ""
    $: is_referral = false
    $: load = false

    const handleRoute = ((route)=>{
        goto(`${$app.url === "/" ? "" : $app.url}?modal=auth&tab=${route}`)
        let obj = {
            modal: "auth",
            tab: route
        }
        $app.searchUrl = obj
        app.set($app)
    })

    const handleSubmit = (async()=>{
        load = true
        const { user, loading } = await $api_script.signup(email, password,ref )
        if(user){
            window.location.href = $app.url; 
        }
        load = loading
    })


</script>
, 
<div id="regist" class="sc-hrJsxi jOrhkb">
    <div class="box">
        <div class="sc-ezbkAF kDuLvp input ">
            <div class="input-label">Email Address</div>
            <div class="input-control">
                <!-- svelte-ignore a11y-positive-tabindex -->
                <input type="text" tabindex="1" autocomplete="off" placeholder="Registered Email Address." bind:value={email}>
            </div>
        </div>
        <div class="sc-ezbkAF kDuLvp input ">
            <div class="input-label">Login Password</div>
            <div class="input-control">
                <!-- svelte-ignore a11y-positive-tabindex -->
                <input type="password" tabindex="2" autocomplete="off" placeholder="Login Password" bind:value={password}>
            </div>
        </div>

        {#if !is_referral}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={()=> is_referral= true} class="casino-code hover">Referral/Promo Code (Optional)
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Arrow"></use>
                </svg>
            </div>
            {:else}
            <div class="sc-ezbkAF kDuLvp input ">
                <div class="input-label">Referral/Promo Code (Optional)</div>
                <div class="input-control">
                     <!-- svelte-ignore a11y-positive-tabindex -->
                    <input type="text" autocomplete="off" tabindex="3" placeholder="Referral/Promo Code" bind:value={ref}>
                </div>
            </div>
        {/if}
    </div>
    <hr>
    <div class="box">
        <div class="argument-check">
            <div class="sc-iJKOTD kdCtGQ checkbox ">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon dot">
                    <use xlink:href="#icon_Check"></use>
                </svg>
            </div>
            <div class="label">I agree with <a href="/help/agreement" class="argument">user agreement</a>, and confirm that I am at least 18 years old!</div>
        </div>
        <div class="buttons">
            <button  on:click={()=> handleRoute("login")} class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big signin">
                <div class="button-inner">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Arrow"></use>
                    </svg>
                    <span>Sign in</span>
                </div>
            </button>
            <button  on:click={()=> handleSubmit()} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big">
                <div class="button-inner">
                    {#if load}
                        <Loader btn={true} />
                    {:else}
                        Sign Up
                    {/if}
                   </div>
            </button>
        </div>
    </div>
</div>