<script>
	import Screens from '$lib/component/screens.svelte';
    import Navbar from "$lib/component/navbar.svelte";
    import "../styles/global.css"
    import { app} from "$lib/store/screen.js";
    import Footer from '$lib/component/footer.svelte';
    import NestedLayout from '$lib/nested-pages/nested-layout.svelte';

</script>

<div id="root">
    <Screens />
    <Navbar />
    <div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
        <slot></slot>
        <Footer />
    </div>
    {#if  Object.keys($app.searchUrl).length}
        <NestedLayout />
    {/if}

</div>