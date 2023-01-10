<script>
    import dayjs from "dayjs"
	export let data;
</script>

<div class="home-introduction-container">👋 Welcome to my place. Here you can find posts about different topics.
    At <a href="/projects">/projects</a> I show some stuff I created and navigating to <a href="/aboutme">/aboutme</a> I share some
    personal stuff.</div>

    <div class="line"></div>

<div class="home-introduction-container" title="Readings should be simple">Simple posts. Fits within a ☕ break.</div>
	
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
        
	{/each}
</div>

<style>
    .home-introduction-container{
        text-align: center;
    }
    
    .posts-list__date{
        text-align: right;
        margin-right: 20px;
    }

    .line{
        width: 500px;
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
</style>