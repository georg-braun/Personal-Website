---
title: "SvelteKit Blog: Generate routes at build time"
date: 2022-01-13
---



My blog posts are markdown files that get transformed to html files by using mdsvex.

After I set up this processing I thought: *But how can I create the links to the posts on my index page?*

The first attempt was to import some file-system packages and try to scan the folder with the markdown files. But that wasn't possible.

## Using vite import

But then I found the solution in this [blog post](https://blog.stranianelli.com/sveltekit-routing-from-other-folders-english/).

By using the vite glob import it was possible to get the markdown files during build time 
```javascript
function getMarkdownFiles() {
    return import.meta.globEager(`../routes/blog/**/*.md`);
}
```
The result had the following structure:

```json
{
    "../routes/blog/add-frontmatter-to-blog-post.md": {
        default: {},
        metadata: {
            date: "2022-01-08T00:00:00.000Z",
            title: "Add frontmatter data to posts in SvelteKit"
        }
    },
    "../routes/blog/some-other-post.md": {}
}
```

You can see the object contains all the necessary information. Awesome.
I just had to extract the relevant information. If you want to know more about this you can check [this file](https://github.com/georg-braun/Personal-Website/blob/6f62d5feee9bfdd3384dc067382c1be313747b27/svelte-ui/src/blog/posts.js).

The result:
```json
[
    { 
        route: "/blog/add-frontmatter-to-blog-post",
        metadata: {
            title: "Add frontmatter data to posts in SvelteKit", 
            date: "2022-01-08T00:00:00.000Z" 
        }
    },
] 
```

## But where do I invoke this?

Components in SvelteKit can have a `load` function (placed in a `<script context="module">` block). This function executes before the component is created. 

The function returns an object that contains a `props` property. The value of this property is passed to the component.  


Now we can access the log posts information in the component and create links to posts.

```svelte
// execute before the component is initialized
<script context="module">
	import { getLatestFivePostsDescByDate } from '../blog/markdownFilesToPosts';
	
	export async function load() {
		const postsByDescDate = getLatestFivePostsDescByDate();
		// pass the post data as props to the component
		return { props: { posts: postsByDescDate } };
	}
</script>

<script>
	// posts are injected by the load function
	export let posts;
</script>


<h1>recent posts</h1>
<div>
    {#each posts as post}
        <li>
            <a href={post.route}>
                {post.metadata.title}
            </a>
        </li>
    {/each}
</div>
```
# ✔️






