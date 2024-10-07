<script>
    import { goto } from "$app/navigation";
    import Loader from "$lib/component/loader.svelte";
    import { app, api_script} from "$lib/store/screen.js";
    import { onMount } from "svelte";
    $: load = false
    $: activeImg = {}
    let Images = [
        { profile_image: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1720390192/avatar55_rtiys4.png", active: false},
        { profile_image: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1720390141/avatar44_ncyqcw.png", active: false},
        { profile_image: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1720398516/avatar1_l6garj.png", active: false},
        { profile_image: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1720398515/avatar2_ztgal3.png", active: true},
        { profile_image: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1720390128/avatar11_fbdw02.png", active: false},
        { profile_image: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1720390124/avatar33_gnrkq8.png", active: false},
        { profile_image: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1720389924/avatar66_daptmu.png", active: false},
        { profile_image: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1720389880/avatar88_enyz9d.png", active: false},
    ]

    onMount(()=>{
        activeImg = $api_script.user
        Images.forEach(element => {
            if(element.profile_image === activeImg.profile_image){
                element.active = true
            }else{
                element.active = false 
            }
            Images = Images
        });
    })


    const handleChangeImg = ((img)=>{
        activeImg = img
        Images.forEach(element => {
            if(element.profile_image === img.profile_image){
                element.active = true
            }else{
                element.active = false 
            }
            Images = Images
        });
    })

    const handleSubmit = (async()=>{
        load = true
       const { status, user} = await $api_script.changeProfileimg(activeImg.profile_image)
       if(status){
            load = false
            if(status === "success"){
                goto($app.url)
                $api_script.user = user
                api_script.set($api_script)
            }
        }
    })


</script>

<div class="sc-dkPtRN jScFby scroll-view sc-cBIieI fftbAb">
    <div class="crop-area" aria-disabled="false">
        <div data-testid="container" class="reactEasyCrop_Container">
            <img alt="" class="reactEasyCrop_Image reactEasyCrop_Contain" src="{activeImg.profile_image}" style="transform: translate(0.46875px, 0px) rotate(0deg) scale(0.9375);">
            <div data-testid="cropper" class="reactEasyCrop_CropArea reactEasyCrop_CropAreaGrid croped-area" style="width: 300px; height: 300px;"></div>
        </div>
        <button class="upload flex-center">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Camera"></use>
            </svg>
            <input type="file">
        </button>
    </div>
    <div class="wrap-box">
        <div class="sc-ezbkAF kDuLvp input sc-kszsFN bVYRzn avatar-selecter">
            <div class="input-label">Default Avatar</div>
            <div class="buttons">
                {#each Images as img}
                    <button on:click={()=> handleChangeImg(img)} class="{img.active ? "active" : ""}" style="opacity: 1; transform: none;">
                        <img alt="" src="{img.profile_image}">
                    </button>
                {/each}
            </div>
        </div>
        <button disabled={load} on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
            {#if load}
                <Loader btn="btn"/>
            {:else}
                <div class="button-inner">Submit</div>
            {/if}
        </button>
    </div>
</div>