<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

</script>


<div id="sidebar" class="sc-fXEqDS hZgDyO">

    <button on:click={()=> dispatch("close")} class="close-wrap">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon close">
            <use xlink:href="#icon_Close"></use>
        </svg>
    </button>
    
    <div id="sidebar" class="sc-xiLah beBixG">
        <div class="mobile-sidebar-top-tab">
            <div class="mobile-sidebar-top-tab">
                <div class="sc-uojGG hksQGj">
                    <a aria-current="page" class="is-active active" href="/">Menu</a>
                </div>
            </div>
        </div>

        <button on:click={()=> dispatch("route", "/")} class="nav-item">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png">
            <div class="nav-right">Home</div>
        </button>

        <button on:click={()=> dispatch("route","/lottery")}  class="nav-item">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/lottery.bc95b607.png">
            <div class="nav-right">Lottery</div>
        </button>

    </div>
</div>

<style>
.hksQGj {
    margin-bottom: 0.875rem;
    padding: 0px 1.125rem;
    height: 64px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 50%;
    position: relative;
}
</style>