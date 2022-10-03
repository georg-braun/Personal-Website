<script>
	export let rockyElmoImage = 'rocky-elmo.png';
	import { pageContainerDefaultClasses } from '../constants';
</script>

<div class={pageContainerDefaultClasses}>
	<p class="mt-4">
		Hey I'm Georg and live with my family in Germany. On this website I share my notes, opinons and
		projects.
	</p>

	<h1 class="mt-4 text-3xl">I am fascinated by</h1>
	<ul>
		<li>having an idea -> making a plan -> learn necessary stuff -> realize it </li>
		
	</ul>

	<h1 class="mt-4 text-3xl">I like</h1>
	<ul>
		<li>system and software design / architecture</li>
		<li>coding</li>
		<li>teaching</li>
		<li>create and repair stuff</li>
	</ul>

	<h1 class="mt-4 text-3xl">My spare time I spend with</h1>
	<ul>
		<li>my girlfriend</li>
		<li>these two guys <img src={rockyElmoImage} alt="animals" /></li>
		<li>bicycles</li>
		<li>motorcycles</li>
	</ul>


	<h1 class="mt-8 text-3xl">My computer science toolbox</h1>
	<p class="mt-4">
		I'm a Fullstack developer with a preference for the backend. This gives me the ability to realize my project ideas.
		I'm always keen to learn new stuff and pick the right tool for the job.<br />
		Following is a list of stuff I worked with or can tell somehting about ;) <br />
	</p>

	<ul class="mt-4">
		<li>C#, TypeScript, Delphi</li>
		<li>ASP.NET Core, WPF</li>
		<li>Entity Framework Core</li>
		<li>Domain-driven Design, Clean Code</li>
		<li>CQRS</li>
		<li>TDD</li>
		<li>PostgreSQL, MongoDb</li>
		<li>Svelte, Blazor</li>
		<li>Continuous Integration, Continuous Delivery, GitHub Actions, Docker</li>
		<li>Agile Development</li>
		<li>Azure DevOps</li>
	</ul>

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
