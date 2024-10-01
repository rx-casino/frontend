<script>
    import Auth from "./auth/auth.layout.svelte";
    import { app } from "$lib/store/screen.js";
</script>

{#if $app.searchUrl?.modal === "auth"}
    <Auth />
{/if}
