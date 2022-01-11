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

	console.log(posts);

	posts.sort((a, b) => {
		return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf();
	});

	console.log(posts);
	return posts;
}

export function getLatestFivePostsDescByDate() {
	const allPostsDescByDate = getPostsDescByDate();
	const latestFivePostsDescByDate = [];
	for (let postIndex = 0; postIndex < 5; postIndex++) {
		const post = allPostsDescByDate[postIndex];
		if (post) latestFivePostsDescByDate.push(post);
	}
	return latestFivePostsDescByDate;
}
