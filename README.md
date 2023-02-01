# Blog and project overview built with svelte

This website is a blog and project overview built with sveltekit. 

## Features
- markdown blog
  - write posts in markdown
  - store images with markdon files in the same folder

## How can I run this locally?

```
// 🚀 start local development
npm run dev
````

## Where do I edit the pages?

- You can edit the posts in `/src/routes`. 

## Where do I add/modify the blog posts?

Blog
- Blog posts are located in `/src/lib/blog`
- Images are stored in the `images` folder
- If new images are added and not shown in local development: run `npm run build` to trigger the copy plugin to copy the images to the `static` folder
- Blog posts need a valid frontmatter

## I want to know more about this
You can find more details in the blog posts
- visit [http://georg-braun.de](http://georg-braun.de)
- or navigate to `src/lib/blog` in this repository
