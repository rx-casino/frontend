import { writable } from "svelte/store";

let sjbjb = {}
export let app = writable(sjbjb)

let _theme = false
export let theme = writable(_theme)

