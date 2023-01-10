<script>
    import Icon from "@iconify/svelte"
    export let project;
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
               <Icon icon="mdi:github" />
       </a>
       {/if} 
       {#if project.projectUrl}
        <a href="{project.projectUrl}" target="_blank">
                <Icon icon="material-symbols:open-in-new-rounded" />
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