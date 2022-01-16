<script context="module">
	import { getLatestFivePostsDescByDate } from '../blog/markdownFilesToPosts';
	// execute before the component is initialized
	export async function load() {
		const postsByDescDate = getLatestFivePostsDescByDate();
		// pass the post data as props to the component
		return { props: { posts: postsByDescDate } };
	}
</script>

<script>
	import Project from '../components/project-template.svelte';
	// posts are injected by the load function
	export let posts;
</script>

<div>
	<h1 class="text-3xl mb-5">recent posts</h1>
	<div class="ml-5">
		{#each posts as post}
			{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined}
				<li>
					<a href={post.route}
						>{post.metadata.title} ({new Date(post.metadata.date).toLocaleDateString()})</a
					>
				</li>
			{/if}
		{/each}
	</div>
	<h1 class="text-3xl mt-10 mb-5">projects</h1>
	<div class="flex flex-wrap justify-center">
		<Project
			title="Website built with svelte"
			imagePath="projects/svelte-website.png"
			repoUrl="https://github.com/georg-braun/Personal-Website"
			projectUrl="https://georg-braun.de/"
			tags={['svelte']}
			date="2022"
			description="Personal website and blog built with sveltekit."
		/>
		<Project
			title="Garage Buddy"
			imagePath="projects/garage-buddy.png"
			repoUrl="https://github.com/georg-braun/garage-buddy"
			projectUrl="https://garage-buddy.georg-braun.de/"
			tags={['react', 'next.js', 'firebase']}
			date="2021"
			description="A web application for managing vehicle maintenances. Pending maintenances are highlighted. A nice side effect of this project was to learn more about react, next.js, firebase."
		/>
		<Project
			title="Family tree"
			imagePath="projects/family-tree.png"
			repoUrl="https://github.com/georg-braun/Family-Tree"
			projectUrl="https://stammbaum.georg-braun.de/"
			tags={['react']}
			date="2019"
			description="Based on the dTree library I built a family tree. In addition, I wrote a graph-to-list converter to switch between different family trees."
		/>
		<Project
			title="OpenCV Augmented Reality"
			imagePath="projects/study-opencv-ar.png"
			repoUrl="https://github.com/georg-braun/Study-Computer-Graphics-SS2016"
			tags={['opencv', 'ar']}
			date="2016"
			description="An augmented reality application with a combination of C++, OpenGL, OpenCV and the ArUco library."
		/>
		<Project
			title="Matlab Augmented Reality"
			imagePath="projects/study-matlab-ar.png"
			repoUrl="https://github.com/georg-braun/Study-Image-Processing-WS2016"
			tags={['matlab', 'ar']}
			date="2016"
			description="An augmented reality application with Matlab for the image processing module in university. Read the webcam image and try to detect the movie cover and play the trailer at this position."
		/>
	</div>
</div>
