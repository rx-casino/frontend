<script>
    import Loader from "./loader.svelte";
</script>
<div class="preload">
    <div class="flex-center">
        <Loader />
    </div>
</div>

<style>
    .preload{
        background-color: #24262b;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 900000;
        top: 0;
        left: 0;
    }
    .flex-center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>