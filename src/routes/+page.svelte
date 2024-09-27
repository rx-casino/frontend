<script type="module">
    import { register } from 'swiper/element/bundle';
    import "../styles/page/home/home.css";
    import Banner from "$lib/pageConponent/home/banner.svelte";
    import Muchwins from '$lib/pageConponent/home/muchwins.svelte';
    import { app } from '$lib/store/screen.js';

    register();
</script>


<div id="home" class="sc-jwQYvw eRdxAb">
    <Banner />
    <div class="sc-gFSQbh {$app.screen < 621 ? "blNkCs" : "gyJkwe"} ">
        
    </div>
</div>