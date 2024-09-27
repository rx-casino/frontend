<script>
// Reexport your entry components here
import { browser } from "$app/environment";
import { app } from '$lib/store/screen';
import { onMount } from "svelte";
import Sidebar from "./sidebar.svelte";

$: resizeScreen = 0
browser && window.addEventListener("resize", () => {
   resizeScreen = browser && window.innerWidth
   $app?.screenResize(resizeScreen)
   app.set($app)
})

onMount(() => {
   resizeScreen = browser && window.innerWidth
   $app?.sizeConfiq(resizeScreen)
   app.set($app)
})

$: $app.newScreen = $app.screen - $app.sideHasExpand - $app.chatBoxExpand

const setSettle = (()=>{
   $app.sideHasExpand === $app.sideFold ? $app.sideHasExpand = $app.sideUnFold : $app.sideHasExpand = $app.sideFold
   $app.isSideClass = $app.isSideClass === $app.openCLass ? $app.closeClass : $app.openCLass
   document.body.className = `${$app.theme} ${$app.isSideClass} ${$app.chatClass}`
   app.set($app)
})

</script>

<Sidebar {resizeScreen} />
<button on:click={setSettle} class="sc-FNXRL eFYxRV pc-sidebar-fold-change-btn {$app.sideHasExpand === $app.sideFold  && $app.sideBar}" style="display:{resizeScreen > 621 ? "block" : "none"};">
   <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
      <use xlink:href="#icon_Tighten"></use>
   </svg>
</button>

