---
title: "SvelteKit Blog: Add frontmatter data to posts"
date: 2022-01-08
tags: ["svelte"]
---

With mdsvex it was possible to transform my markdown files to html files. Besides the post text, the markdown files contain a frontmatter with pieces of information about the post title and the creation date.

I wanted to access the information in my blog post layout file ([link to post](/blog/add-layout-to-markdown-posts)) to add this information to the header of the post.

![Sketch of the task: How to get the frontmatter data to the blog post layout file.](images/access-mdsvex-frontmatter.png)

But I didn't really know how to access the data in the blog-post layout file.

But then I read the mdsvex doc and was surprised.

With mdsvex and svelte props this was super easy because mdsvex passes the frontmatter data to available props in the layout file.

![The frontmatter data is injected to the mdsvex layout file.](images/mdsvex-frontmatter-injection.png)


Done.