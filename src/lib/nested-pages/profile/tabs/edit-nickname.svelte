<script>
    import { goto } from "$app/navigation";
    import Loader from "$lib/component/loader.svelte";
    import { app, api_script} from "$lib/store/screen.js";
    import { onMount } from "svelte";
    let username = ""
    $: load = false

    onMount(()=>{
        username = $api_script.user?.username
    })

    const handleSubmit = (async()=>{
        load = true
      const {status} = await $api_script.changeUsername(username)
        if(status){
            load = false
            if(status === "success"){
                goto($app.url)
            }
        }
    })

    
</script>
<div class="sc-dkPtRN jScFby scroll-view sc-kMyqmI jWpPjB">
    <div class="flex-column full">
        <a class="avatar-box" href="{!$app.url ? "/" : $app.url === "/" ? "" : $app.url}?modal=profile&tab=edit_avatar&id={$api_script.user?.user_id}">
            <img class="avatar " alt="" src="{$api_script.user?.profile_image}">
            <button>Edit Your Avatar</button>
        </a>
        <div class="dialog-box">
            <div class="sc-ezbkAF kDuLvp input ">
                <div class="input-label">Username </div>
                <div class="input-control">
                    <input type="text"  autocomplete="off" placeholder="2-16 characters" bind:value={username}>
                </div>
            </div>
            <div class="tip-warnning">Do not use special punctuation, otherwise your account may not be supported.</div>
            <button disabled={load} on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                {#if load}
                    <Loader btn="btn"/>
                    {:else}
                    <div class="button-inner">Modify</div>
                {/if}
             
            </button>
        </div>
    </div>
</div>