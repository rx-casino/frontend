<script>
    import { goto } from "$app/navigation";
    import { app } from "$lib/store/screen.js";
    import { search_tab } from '$lib/store/routes.js';
    import CloseButton from "$lib/component/close-button.svelte";
    import "../../../styles/wallet.css"
    import Deposit from "./tab-views/deposit.svelte";
    import Empty from "$lib/component/empty.svelte";
    import Widthdraw from "./tab-views/widthdraw.svelte";

    const handleRoute = ((route)=>{
        goto(`${!$app.url ? "/" : $app.url === "/" ? "" : $app.url}?modal=wallet&tab=${route}`)
    })

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog ">
       <div class="dialog-head has-close">
          <div class="dialog-title">Wallet</div>
             <div class="sc-halPKt dSaKZv">
                <button>
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Transaction"></use>
                    </svg>
                    <span> Transactions </span>
                </button>
            </div>
        </div>
        <CloseButton />
        <div class="dialog-body no-style " style="z-index: 2; transform: none;">
            <div id="wallet" class="sc-eMHfQD jMKwQa">
                <div class="sc-kkIjYy brDMDr">
                     <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div on:click={()=> handleRoute("deposit")} class="tab {$search_tab.tab === "deposit" ? "active" : ""}">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Wallet"></use>
                        </svg>
                        <div class="title">Deposit</div>
                    </div>
                     <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div on:click={()=>handleRoute("withdraw")} class="tab {$search_tab.tab === "withdraw" ? "active" : ""}">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_WithDraw"></use>
                        </svg>
                        <div class="title">Withdraw</div>
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div on:click={()=>handleRoute("swap")} class="tab {$search_tab.tab === "swap" ? "active" : ""}">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Swap"></use>
                        </svg>
                        <div class="title">RXSwap</div>
                    </div>
                     <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div on:click={()=>handleRoute("vault")} class="tab {$search_tab.tab === "vault" ? "active" : ""}">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Vault"></use>
                        </svg>
                        <div class="title">Vault Pro</div>
                    </div>
                </div>
                {#if $search_tab.tab === "deposit"}
                    <Deposit />
                {:else if $search_tab.tab === "withdraw"}
                    <Widthdraw /> 
                {:else}
                    <Empty content="Oops!!! No data"/>
                {/if}
                
            </div>
        </div> 
    </div> 
</div>