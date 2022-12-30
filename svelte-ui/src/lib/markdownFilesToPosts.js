/**
 * Functions to get the posts metadata from the markdown files
 */

export function getPostsDescByDate() {
	const posts = getAllPosts();
	const sortedPosts = sortPostsByDateDesc(posts);
	return sortedPosts;
}

export function getLatestFivePostsDescByDate() {
	const allPostsDescByDate = getPostsDescByDate();
	return allPostsDescByDate.slice(0, 5);
}

let postsCache;
function getAllPosts() {
	const markdownFiles = getMarkdownFiles();
	if (!postsCache) postsCache = getPosts(markdownFiles);
	return postsCache;
}

function getMarkdownFiles() {
	return import.meta.globEager(`../routes/bits/**/*.md`);
}

function getPosts(markdownFiles) {
	// many thanks to https://blog.stranianelli.com/sveltekit-routing-from-other-folders-english/
	const posts = [];
	for (let path in markdownFiles) {
		const rawPost = markdownFiles[path];
		const post = extractPostData(path, rawPost);
		if (post.metadata.category !== "private-project")
			posts.push(post);
	}
	return posts;
}

function extractRoute(path) {
	// remove folder info and markdown file extension => route
	return path.replace('../routes', '').replace('.md', '');
}

function extractPostData(rawPath, rawPost) {
	const metadata = rawPost.metadata;
	const route = extractRoute(rawPath);
	return {
		route,
		metadata
	};
}

function sortPostsByDateDesc(postsToSort) {
	const posts = [...postsToSort];
	posts.sort(compareFuncDateDesc);
	return posts;
}

function compareFuncDateDesc(a, b) {
	return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf();
}
