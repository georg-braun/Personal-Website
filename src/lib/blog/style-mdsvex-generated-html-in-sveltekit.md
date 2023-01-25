---
title: "SvelteKit Blog: Style mdvsex generated html"
date: 2022-01-11
tags: ["sveltekit"]
---

> Notice. This was written pre SvelteKit 1.0.0. With the release of SvelteKit 1.0.0 some things changed. Especially the folder and routing structure. The solution in this blog post isn't compatible with version 1.0.0.

My blog posts are markdown files that get processed to html files (you can find more about this in [this post](/blog/use-markdown-files-as-sveltekit-routes)

In a new post that I wrote in markdown I used a bullet list. The problem was that the bullet list wasn't visible in the generated html. 

The reason for that was that the generated html had no styling. 

My first attempt was to add a style section to the blog-post layout component.

```svelte
<div class="container mx-auto md:w-4/5">
	<div class="mb-8">
		<h1 class="text-4xl">{title}</h1>
		<p>{new Date(date).toLocaleDateString()}</p>
	</div>
	<slot />
</div>

<style>
	ul {
		list-style-type: circle;
	}
</style>
```

But the styling wasn't used because at build time no html element used this styling. 

The solution was to create a `blog-post.css` file and import this file in the blog-post layout (`blog-post.svelte`).
This css file is applied to all html elements. To scope the css only to the blog-post I added a class `blog-post` and hierarchical css rules.

```svelte
<script>
	import './blog-post.css';
	...
</script>

<div class="blog-post">
	<div>
		<h1>{title}</h1>
		<p>{new Date(date).toLocaleDateString()}</p>
	</div>
	<slot />
</div>
```

```css
.blog-post ul {
    list-style-type: disc;
    padding-left: 2rem;
}

```

Now it's possible to modify the blog post styling :) 
