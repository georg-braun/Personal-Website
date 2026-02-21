<script>
    let { project } = $props();
</script>

<div class="header">

    <div>
        <h4>
            {project.title}
        </h4>
    </div>
    <div class="header__links">
       {#if project.repoUrl}
       <a href="{project.repoUrl}" target="_blank">
            <iconify-icon icon="mdi:github"></iconify-icon>
       </a>
       {/if}
       {#if project.projectUrl}
        <a href="{project.projectUrl}" target="_blank">
            <iconify-icon icon="material-symbols:open-in-new"></iconify-icon>
        </a>
        {/if}
    </div>
</div>



<div class="project-description">
    {project.description}
</div>

<style>
    .header{
        display: flex;
        justify-content: space-between;

    }

    .header__links{
        display: flex;
        align-items: center;
    }
    .project-description{
        margin-left: 40px;
    }
    </style>