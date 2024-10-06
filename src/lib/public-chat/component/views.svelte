<script>
    import { chats } from "$lib/store/screen.js";
    import { onMount, afterUpdate } from 'svelte';
    import { app } from "$lib/store/screen.js";
    import Badges from "$lib/component/badges.svelte";
    let chatContainer;

        const scrollToBottom = () => {
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        };

        // Scroll when the component mounts
        onMount(() => {
            scrollToBottom();
        });

        // Scroll every time the chat updates (new messages)
        afterUpdate(() => {
            scrollToBottom();
        });

        function formatTime(no) {
            const now = new Date(no);
            let hours = now.getHours();
            let minutes = now.getMinutes();
            // Add leading zero if necessary
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return `${hours}:${minutes}`;
        }

</script>


<div bind:this={chatContainer} class="sc-dkPtRN jScFby scroll-view sc-cNKqjZ dPmCMO sc-jvvksu fuYrTE chat-list">
    <div class="sc-AjmGg kgsidd" >
        {#each $chats as chat}
            <div class="flat-item" >
                <div class="sc-tAExr VfNib notranslate ">
                    <div class="head">
                        <a class="head-link" href="{`${!$app.url ? "/" : $app.url === "/" ? "" : $app.url}?modal=profile&tab=main&id=${chat?.user_id}`}">
                            <img class="avatar " alt="" src="{chat.profile?.profile_image}">
                            <div class="sc-jQrDum jouJMO user-level type-2">
                                <div class="level-wrap">
                                    <span>V</span>
                                    <span>{chat.profile?.vip_level}</span>
                                </div>
                            </div>
                            <div class="sc-khQegj fPtvsS level levelnums_4">
                                <Badges />
                            </div>
                        </a>
                    </div>
                    <div class="content">
                        <div class="title">
                            <div class="name">
                                <a href="{`${!$app.url ? "/" : $app.url === "/" ? "" : $app.url}?modal=profile&tab=main&id=${chat?.user_id}`}">
                                    <span>{chat.profile?.username}</span>
                                </a>
                                <div class="time">{formatTime(chat.time)}</div>
                            </div>
                        </div>
                        <div class="msg-wrap">
                            <div class="sc-jKTccl bkGvjR">
                                <!-- <a class="cl-primary" href="/user/profile/559045">@Jatanpal</a>  -->
                                {chat.text}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        {/each}
     
    </div>
</div>