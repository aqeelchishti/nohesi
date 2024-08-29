<script lang="ts">
	import { browser } from "$app/environment";
	import { onDestroy, onMount } from "svelte";


    onMount(() => {
        if(browser){
            document.body.classList.add('overflow-hidden');
        }
    })

    onDestroy(() => {
        if(browser){
            document.body.classList.remove('overflow-hidden');
        }
    })
</script>

<div
	class="fixed inset-0 z-[51] w-full h-screen bg-black flex justify-center items-center"
>
	<img src="https://cdn.nohesi.gg/assets/website/images/load.gif" alt="loading" class="w-1/4 sm:w-1/6 lg:w-1/10 2xl:w-1/12" />
</div>
