<script>
    import { goto } from "$app/navigation";
    import { app } from '$lib/store/screen.js';

    const handleCloseModal = (()=>{
        goto($app.url)
        $app.searchUrl = {}
        app.set($app)
    })

</script>


<button on:click={()=> handleCloseModal()} class="sc-ieecCq fLASqZ close-icon dialog-close">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
        <use xlink:href="#icon_Close"></use>
    </svg>
</button>