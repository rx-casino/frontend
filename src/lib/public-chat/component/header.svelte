<script>
    import { app } from "$lib/store/screen.js";
    const handleChatScren = (()=>{
        $app.updateChatClass("clicked")
        app.set($app)
    })

</script>

<div class="sc-hJZKUC dWgZek">
    <div class="select-wrap">
        <div class="sc-jJoQJp gOHquD select  ">
            <div class="select-trigger">
                <div class="select-label">English</div>
                <div class="arrow ">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Arrow"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="chat-features">
        <!-- <div class="inform">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Inform"></use>
            </svg>
        </div>
        <div class="sc-iWBNLc bXthlR rich-btn">
            <img alt="rich" src="https://static.nanogames.io/assets/rich.8786d13b.png">
        </div> -->
        <button on:click={handleChatScren} class="sc-ieecCq fLASqZ close-icon ">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Close"></use>
            </svg>
        </button>
    </div>
</div>