---
title: "SvelteKit Blog: Add a layout to markdown posts"
date: 2022-01-08
tags: ["sveltekit"]
---

> Notice. This was written pre SvelteKit 1.0.0. With the release of SvelteKit 1.0.0 some things changed. Especially the folder and routing structure. The solution in this blog post isn't compatible with version 1.0.0.

The layout of my website is defined in __layout.svelte file. The placeholder for the concrete content (slot) is missing a special styling. Therefore every page is able to define a placeholder styling that meets their needs. 

As described in my post ["Use markdown files as routes in SvelteKit"](/blog/use-markdown-files-as-sveltekit-routes) my markdown files are transformed to routes. So they needed a styling definition too. 

I just needed to create a layout svelte component and add the layout parameter to the mdsvex preprocessor in the svelte.config.js

```html
// src/layout/blog-post.svelte
// The blog post layout definition
<div class="container mx-auto md:w-4/5">
	<slot />
</div>
```

```javascript
// svelte.config.js
const config = {
    ...
	preprocess: [
		preprocess(),
		mdsvex( ... , layout: './src/layout/blog-post.svelte' })
	],
```

In the figure you can see the usage of the different layouts.
![Overview of the different layouts. Blog inside blog-post layout inside overall svelte layout.](images/mdsvex-blog-post-layout.png)
