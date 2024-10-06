<script>
    import { socket } from "$lib/store/socket.js"
    import { api_script, app } from "$lib/store/screen.js";
    import { goto } from "$app/navigation";
    let message = ""
    const handleSendMessage = ((e, event)=>{
        if ( (e.key === "Enter" && message) || e.type === "click" || e.key === "Enter") {
            if (e.key === "Enter") {
                e.preventDefault();
            }
            let data = {
                user_id: $api_script.user.user_id,
                msg_id: Math.floor(Math.random() * 230000000),
                text: event.message,
                type:event.type,
                time: new Date(),
                gif: "",
                profile: $api_script.user
            }
            $api_script.is_login ? $socket.public_chat(data) : goto(`${!$app.url ? "/" : $app.url === "/" ? "" : $app.url}?modal=auth&tab=login`)
            message = ""
        }
    })
    $: isFocused = false;
   // Set focus state
   function handleFocus() {
        isFocused = true;
    }

    // Reset focus state
    function handleBlur() {
        isFocused = false;
    }

</script>

<svelte:body on:keypress={()=> handleSendMessage(event, {message, type: "normal"})} />
<div class="sc-hkgtus ddROGz">
    <div class="send-input">
        <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset input-area send">
            <div class="input-control">
                <textarea   
                 class:isFocused={isFocused}
                on:focus={handleFocus}
                on:blur={handleBlur} placeholder="Your Message" bind:value={message} style="height: 44px;"></textarea>
                <button   
                on:click={handleSendMessage} class="sc-JkixQ cVsgdS emoji-r-wrap">
                    <!-- <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Emjoy"></use>
                    </svg> -->
                </button>
            </div>
            {#if isFocused}
                <div class="send-btn-wrap" style="opacity: 1; transform: none;">
                    <button on:click={()=> handleSendMessage(event, {message, type: "normal"})} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal send-btn ">
                        <div class="button-inner">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Send"></use>
                            </svg>
                        </div>
                    </button>
                </div>
            {/if}
  
        </div>
    </div>
    <!-- <div class="send-controls">
        <div class="left-actions">
            <a class="chat-icon" href="/user/rain">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Rain"></use>
                </svg>
            </a>
            <div class="command-btn">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Command"></use>
                </svg>
            </div>
            <a class="chat-icon" href="/user/coindrop_send">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_CoinDrop"></use>
                </svg>
            </a>
        </div>
        <div class="sc-dkQkyq gbjudO gift-r-wrap hide-gift">
            <button class="gift-btn">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_GIF"></use>
                </svg>
            </button>
        </div>
    </div> -->
</div>