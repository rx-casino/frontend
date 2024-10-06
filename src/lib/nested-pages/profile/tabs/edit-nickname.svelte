<script>
    import { app, api_script} from "$lib/store/screen.js";
    
</script>
<div class="sc-dkPtRN jScFby scroll-view sc-kMyqmI jWpPjB">
    <div class="flex-column full">
        <a class="avatar-box" href="{!$app.url ? "/" : $app.ur === "/" ? "" : $app.url}?modal=profile&tab=edit_avatar&id=${$api_script.user?.user_id}">
            <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/505090/s?t=1728039006897">
            <button>Edit Your Avatar</button>
        </a>
        <div class="dialog-box">
            <div class="sc-ezbkAF kDuLvp input ">
                <div class="input-label">Username </div>
                <div class="input-control">
                    <input type="text" autocomplete="off" placeholder="2-16 characters" value="Valiant Joe">
                </div>
            </div>
            <div class="tip-warnning">Do not use special punctuation, otherwise your account may not be supported.</div>
            <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                <div class="button-inner">Modify</div>
            </button>
        </div>
    </div>
</div>