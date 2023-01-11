// Don't reload all possible routes on the client.
export const csr = true;

export const load = async ({ fetch }) => {
	try {
		const response = await fetch(`/api/posts`);
		const posts = await response.json();

		return {
			posts
		};
	} catch (error) {
		console.log(error)
	}
};
