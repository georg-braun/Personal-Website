<script>
	export let rockyElmoImage = 'rocky-elmo.png';
	import { pageContainerDefaultClasses } from '../constants';
</script>

<div class={pageContainerDefaultClasses}>
	<h1 class="text-3xl">About me</h1>

	<p class="mt-4">
		My name is Georg and work as software engineer in Germany. <br />
		I'm interessted and evolve in software- and system-architecture and web development. Furthermore
		I love to determine how things work and share my knowledge.
	</p>

	<p class="mt-8">
		I think in software development it's important to use the right tool for the job. <br />
		Therefore a software developer should have a rough overview of possible tools to solve a problem.
		No one can master them all, but I think to be a generalist isn't the solution. I really like the
		concept of a T-shaped developer.
		<br />
	</p>
	<p class="mt-4">
		Following is a unordered list of stuff I worked with or can tell somehting about ;) <br />
		.NET, ASP.NET, Clean-Architecture, Domain-driven Design, Clean Code, Entity Framework, PostgreSQL,
		Svelte, React, Continuous Integration, Continuous Deployment, GitHub Actions, Docker, Nginx, Agile
		Development, Scrum, Azure DevOps,
	</p>

	<p class="mt-4">
		<br />
		My spare time I mostly spent with
	</p>
	<ul>
		<li>my girlfriend</li>
		<li>these two guys <img src={rockyElmoImage} alt="animals" /></li>
		<li>solving problems / do helpful stuff with software</li>
		<li>bicycles</li>
		<li>motorcycles</li>
		<li>build stuff</li>
	</ul>
	<p class="mt-4">
		My blog is about projects, opinions, and problems I encounter as a software engineer.<br />
		I think blogging has several advantages: reflection, learning by teaching, and offer hopefully some
		useful information.<br />
	</p>
	<p class="mt-4">Maybe there will sneak in some posts about my other interests ;)</p>

	<p class="mt-4">
		If you want to see a full list of stages and buzzwords visit my <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.linkedin.com/in/georg-braun-41286b140/">LinkedIn profile</a
		>
		or contact me mail.at.georg-braun.de :)
	</p>
</div>

<style>
	a {
		text-decoration: underline;
	}
</style>
