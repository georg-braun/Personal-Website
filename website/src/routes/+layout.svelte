<script>
import '../prism.css'
import '../app.css'
</script>

<!-- Header -->

<div class="image-container">
	<img src="/avatar.png" alt="Profile" width="200px" />
</div>
<div class="line"></div>
<div class="navigation">
<div><a href="/" class="navigation__link">
    <div class="navigation__link__text">Home</div>
</a></div>
<div><a href="/projects" class="navigation__link">
    <div class="navigation__link__text">Projects</div>
</a></div>
<div><a href="/aboutme" class="navigation__link">
    <div class="navigation__link__text">About me</div>
</a></div>
</div>
<div class="line"></div>

<div class="page-content">

    <slot />
</div>

<style lang="scss">
    .image-container{
        text-align: center;
        margin-bottom: -4px;
        padding: 0px;
    }
    .line{
        width: 500px;
        height: 1px;
        background-color: black;
        margin-left: auto;
        margin-right: auto;
    }

    .navigation {
        display: flex;
        justify-content: center;
    }
    .navigation__link__text {
        &:hover{
            background: #ECEFF4;
        }
        
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;

        font-size: 1.25em;
        width: 100px;

        text-align: center;
    }
    .navigation__link{
        text-decoration: none ;
        color: black;
    }

    .page-content{

        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;

        max-width: 800px;        
    }
</style>