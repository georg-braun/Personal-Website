---
title: Use markdown files as routes in SvelteKit
date: 2022-01-07
---

# The mission 

I started to create my website with SvelteKit. One requirement was to be able to write my blog posts in markdown. SvelteKit uses a file-based routing system and the *.svelte files within the route directory are published as routes. 

```
routes/
	index.svelte
	/blog	
		use-markdown-as-sveltekit-routes.md
```

But I needed a way to transform my markdown files to valid "route files". The solution was surprisingly easy.

# The solution 

I just needed to add the MDsveX preprocessor (https://mdsvex.com) and tweak the svelte.config.js a little bit.

```javascript
const config = {
	// also consider .md files
	extensions: ['.svelte', '.md'],

    // mdsvex should process .md files
	preprocess: [preprocess(), mdsvex({ extensions: ['.md'] })],
}
```

That`s it 🥳 

`baseUrl/blog/use-markdown-files-as-sveltekit-routes` shows my markdown file as html page. 


