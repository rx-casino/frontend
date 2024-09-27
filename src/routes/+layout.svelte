<script>
	import Screens from '$lib/component/screens.svelte';
    import Navbar from "$lib/component/navbar.svelte";
    import "../styles/global.css"
    import Footer from '$lib/component/footer.svelte';

</script>

<div id="root">
    <Screens />
    <Navbar />
    <div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
        <slot></slot>
        <Footer />
    </div>

</div>