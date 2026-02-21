<script>
import '../prism.css'

import Header from '$lib/components/Header.svelte';

    let { children } = $props();
    let darkMode = $state(false);
    let themeName = $derived(darkMode ? "dark" : "light");
</script>

<svelte:head>
 <link rel="stylesheet" href={`/theme/${themeName}.css`} />
</svelte:head>

<Header />
<div class="page-content">
    {@render children()}
</div>

<div class="impressum">
    <a href="/impressum">Impressum</a>
</div>

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