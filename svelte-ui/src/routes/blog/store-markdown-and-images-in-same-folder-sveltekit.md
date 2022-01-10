---
title: Store images in the same folder as markdown files in SvelteKit blog
date: 1/2022
---

I had a running blog solution. Markdown files were processed and served as routes. 

But there was one thing I didn`t like.
In markdown referenced images had to be located in the static folder. I want to have all blog-related stuff in one place so that I just can copy it to other places and don´t have to search. 

The task was to find out how I can store the images in the same folder as the markdown files and additionally serve them in the blog. 


I did some research and the best working solution was to copy the images from the markdown folder to the build folder at build time. 


To accomplish this I added the plugin "rollup-plugin-copy":

```javascript
const config = {
	...
	kit: {
		...
		vite: () => ({
			plugins: [
				copy({
					// copy images from the markdown posts folder to the static folder during build time
					// advantage: images can reside with the markdown files
					targets: [{ src: 'src/routes/blog/images', dest: 'static/blog' }]
				})
			]
		})
	}
};
```


So it is possible to create and modify the blog posts in an isolated folder and I didn't need some weird image-folder-references. I could just copy the folder to another "markdown-to-html" blog.

```
/src
	/routes
		/blog (contains all post relevant data)
			/images
				my-first-post-example.png
			my-first-post.md
/static
	/blog
		/images (copy of the routes/blog/images folder)
			my-first-post-example.png
```

With every `npm run build` the images are copied. 

To avoid a duplication of the images in the repository I added the copy-destination folder to `.gitignore`.