<script>
import '../prism.css'
import '../app.css'
import Header from '$lib/components/Header.svelte';
</script>


<Header />
<div class="page-content">
    <slot />
</div>

<style lang="scss">
    .page-content{

        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;

        max-width: 800px;        
    }
</style>