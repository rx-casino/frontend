<script>
    import { ScreenScript } from '$lib/component/screenConfig.js';
	import Screens from '$lib/component/screens.svelte';
    import Navbar from "$lib/component/navbar.svelte";
    import "../styles/global.css"
    import "../styles/games.css"
    import { page } from "$app/stores"
    import { app, api_script} from "$lib/store/screen.js";
    import Footer from '$lib/component/footer.svelte';
    import NestedLayout from '$lib/nested-pages/nested-layout.svelte';
    import { Toaster } from 'svelte-sonner'
    import { search_tab } from '$lib/store/routes.js';
    import Preload from '$lib/component/preload.svelte';
    import { onMount } from 'svelte';
    import Public from '$lib/public-chat/public.layout.svelte';
    import { browser } from '$app/environment';
    
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
    $: {
        if($page.url.pathname){
            app.subscribe(item => {
                item.url = $page.url.pathname
            })
        }
    }
    $: resizeScreen = 0
    onMount(()=>{
        const _app = new ScreenScript()
        const theme = browser ? localStorage.getItem("theme") || "" : ""
        resizeScreen = browser && window.innerWidth
        _app.sizeConfiq(resizeScreen)
        _app.url = $page.url.pathname
        _app.themeConfig(theme)
        _app.preload = false
        app.set(_app)
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
