<script>
	import Screens from '$lib/component/screens.svelte';
    import Navbar from "$lib/component/navbar.svelte";
    import "../styles/global.css"
    import { app, api_script} from "$lib/store/screen.js";
    import Footer from '$lib/component/footer.svelte';
    import NestedLayout from '$lib/nested-pages/nested-layout.svelte';
    import { Toaster } from 'svelte-sonner'
    import { search_tab } from '$lib/store/routes.js';
    import Preload from '$lib/component/preload.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Public from '$lib/public-chat/public.layout.svelte';

    $: queryString = ""
    $: params = ""
    $: paramsObj = {}
    $: {
        queryString = $page.url.search
        params = new URLSearchParams(queryString);
        params.forEach((value, key) => {
            paramsObj[key] = value;
        });
        search_tab.set(paramsObj)
    }

    onMount(()=>{
        $app.preload = false
    })
</script>

<div id="root">
    {#if $app.preload}
        <Preload />
    {/if}

    <Screens />
    <Navbar />
    <Toaster position="bottom-left" expand={true} richColors  />
    <div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
        <slot></slot>
        <Footer />
    </div>
    {#if $app.chatClass}
        <Public />
    {/if}
   
    {#if  queryString}
        <NestedLayout />
    {/if}

</div>
