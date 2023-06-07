<script>
    import dayjs from "dayjs";
    import { getTagColor } from "$lib/utils/tags";
    export let data;
</script>

<div class="introduction">
    <div class="image-container hide">
        <img src="/avatar.png" alt="Profile" width="150px" />
    </div>
    <div class="home-introduction-container">
        👋 Welcome to my place. Here I primarily write about web technologies and
        dotnet stuff. At <a href="/projects">/projects</a> you can find some things
        I made and navigating to <a href="/aboutme">/aboutme</a> I share some personal
        insights.
    </div>
</div>

<div class="line" />

<div class="home-introduction-container" title="Readings should be simple">
    I like simple posts that don't overwhelm the reader. A post should be
    readable within a coffee break <iconify-icon icon="lucide:coffee" />
</div>

<div class="posts-list">
    {#each data.posts as post}
        <div class="posts-list__date">
            {dayjs(post.meta.date).format("YYYY-MM-DD")}
        </div>
        <div>
            <a href={post.path}>
                {post.meta.title}
            </a>
        </div>
        <div></div>
        <div class="tag-container">
            {#if post.meta.tags}
                {#each post.meta.tags as tag}
                    <div class="tag" style="background-color: {getTagColor(tag)};">
                        {tag}
                    </div>
                {/each}
            {/if}
        </div>
    {/each}
</div>

<style>

@media (max-width: 600px) {
    .hide {
        display: none;
    }
}
    .introduction {
        display: flex;
    }
    .home-introduction-container {
        text-align: center;
        margin: auto;
    }

    .posts-list__date {
        text-align: right;
        margin-right: 20px;
    }

    .line {
        width: 90%;
        height: 1px;
        background-color: black;

        margin-left: auto;
        margin-right: auto;

        margin-top: 20px;
        margin-bottom: 20px;
    }

    .posts-list {
        margin-top: 40px;

        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 10px;
    }

    .tag-container {
        display: flex;
        font-size: small;
        gap: 5px;
    }

    .tag{
        border: solid;
        border-width: 1px;
        border-radius: 10px;
        padding: 0px 6px;
    }
</style>
