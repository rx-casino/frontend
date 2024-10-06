<script>
    import Auth from "./auth/auth.layout.svelte";
    import Wallet from "./wallet/wallet.layout.svelte";
    import { search_tab } from '$lib/store/routes.js';
    import Profile from "./profile/profile.layout.svelte";
</script>


{#if $search_tab?.modal === "auth"}
    <Auth />
{/if}

{#if $search_tab?.modal === "wallet"}
    <Wallet />
{/if}

{#if $search_tab?.modal === "profile"}
    <Profile />
{/if}