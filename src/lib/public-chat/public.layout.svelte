<script>
    import Header from "./component/header.svelte";
    import "../../styles/public-chat.css";
    import Controllers from "./component/controllers.svelte";
    import Views from "./component/views.svelte";
</script>


<div class="sc-cVAmsi bJUiGv" style="transform: none;">
    <div id="public-chat" class="sc-ewSTlh hHMWvP">
        <Header />
        <div class="sc-bSqaIl eA-dYOl">
            <Views />
            <!-- <div class="chat-infos infos"><div class="unreads"><span>4</span></div></div> -->
            <Controllers />
        </div>
    </div>
</div>