<script>
    import "../../../styles/profile.css"
    import CloseButton from "$lib/component/close-button.svelte";
    import Profile from "./tabs/profile.svelte";
    import { search_tab } from '$lib/store/routes.js';
    import EditNickname from "./tabs/edit-nickname.svelte";
    import EditAvatar from "./tabs/edit-avatar.svelte";
    import BackButton from "$lib/component/back-button.svelte";
    import { onMount } from "svelte";
    import Empty from "$lib/component/empty.svelte";
    import { api_script } from '$lib/store/screen';
    import Loader from "$lib/component/loader.svelte";
    $: label = "https://static.nanogames.io/assets/vip_type1.9697d4e3.svg"
    $: user = null
    $: load = false

    onMount(async()=>{
        load = true
        const respose = await $api_script.userByID($search_tab.id)
        load = respose.loading
        if(respose.user){
            user = respose.user
        }
    })

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog ">
        {#if $search_tab.tab !== "main" }
            <BackButton />
        {/if}
        <div class="dialog-head {$search_tab.tab === "main" ? "" : "has-back"}  has-close">
            <div class="dialog-title">{$search_tab.tab === "main" 
                ? "User Information" : 
                $search_tab.tab === "edit" ? "Nickname" : "Edit Your Avatar" }</div>
            <div class="sc-jHwEXd fUstMm vip-level">
                <div class="vip-box" style="background-image: url(&quot;{label}&quot;);">V0</div>
            </div>
        </div>
        <CloseButton />
        <div class="dialog-body {$search_tab.tab === "main" || $search_tab.tab === "edit_avatar" ? "no-style" : "default-style"}   " style="z-index: 2; transform: none;">
            {#if !load}
                {#if user}
                {#if $search_tab.tab === "main" }
                    <Profile {user}/>
                {/if}
                {#if  $search_tab.tab === "edit"}
                    <EditNickname />
                {/if}
                {#if  $search_tab.tab === "edit_avatar"}
                    <EditAvatar />
                {/if}
                {:else}
                    <Empty content="User not found"/>
                {/if}
            {:else}
                <Loader />
            {/if}
    

        </div>
    </div>
</div>