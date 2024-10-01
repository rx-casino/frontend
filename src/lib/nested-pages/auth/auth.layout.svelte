<script>
    import "../../../styles/auth.css"
    import CloseButton from "$lib/component/close-button.svelte";
    import Signup from "./signup.svelte";
    import { app } from "$lib/store/screen.js";
    import Login from "./login.svelte";

    
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
  <div class="dialog sc-hRnpUl gA-DObP">
    <div class="dialog-head has-close">
        <img alt="" src="{$app.smallLagos}" class="sc-faIbUi jUOgyY">
    </div>
    <CloseButton />
    <div class="dialog-body no-style sc-hRnpUl gA-DObP" >
        <div class="welcome">
            <div class="msg1">BUILD THE BEST CRYPTO CASINO TOGETHER</div>
            <img alt="" src="https://static.nanogames.io/assets/login_coco.1855b11e.png">
        </div>
        <div class="sc-dkPtRN jScFby scroll-view hide-bar sc-hCwLRM gVXbPg">
            {#if $app.searchUrl?.tab === "sign-up"}
                <Signup />   
            {/if}
            {#if $app.searchUrl?.tab === "login"}
                <Login />   
            {/if}
        </div>
    </div>
  </div>
</div>