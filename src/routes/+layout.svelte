<script>
import '../prism.css'

import Header from '$lib/components/Header.svelte';
    $: themeName = darkMode ? "dark" : "light";
    let darkMode;
</script>

<svelte:head>
 <link rel="stylesheet" href={`/theme/${themeName}.css`} />
</svelte:head>

<Header />
<div class="page-content">
    <slot />
</div>

<div class="impressum">
    <a href="/impressum">Impressum</a>
</div>

<button on:click={() => darkMode = !darkMode}>
	{themeName}
</button>

<style lang="scss">
    .page-content{

        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;

        max-width: 800px;        
    }

    .impressum{
        margin: 40px 0px;
        text-align: center;
    }
</style>