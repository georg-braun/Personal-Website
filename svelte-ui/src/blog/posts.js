function extractRoute(path) {
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


export function getPostsDescByDate() {
	const allPosts = import.meta.globEager(`../routes/blog/**/*.md`);

	// many thanks to https://blog.stranianelli.com/sveltekit-routing-from-other-folders-english/
	const posts = [];
	for (let path in allPosts) {
		const rawPost = allPosts[path];
		const post = extractPostData(path, rawPost);
		posts.push(post);
	}

	posts.sort((a, b) => {
		return new Date(b.metadata.date).getDate() - new Date(a.metadata.date).getDate();
	});

	console.log(posts);
	return posts;
}

export function getLatestFivePostsDescByDate() {
	return getPostsDescByDate();
}
