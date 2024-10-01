<script type="module">
    import { register } from 'swiper/element/bundle';
    register();
    import "../styles/page/home/home.css";
    import Banner from "$lib/pageConponent/home/banner.svelte";
    import Originals from '$lib/pageConponent/home/originals.svelte';
    import BiggestWin from '$lib/pageConponent/home/biggest-win.svelte';
    import LiveBets from '$lib/pageConponent/home/live_bets.svelte';
</script>

<div id="home" class="sc-jwQYvw eRdxAb">
    <Banner />
    <div class="sc-gFSQbh gyJkwe">
        <div class="sc-jYmNlR blJYGp sc-bXRjm dGCjx">
            <Originals />
            <BiggestWin />
            <LiveBets />
        </div>
    </div>
</div>