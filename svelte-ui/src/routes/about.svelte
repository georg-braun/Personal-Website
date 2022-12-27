<script>
	export let rockyElmoImage = 'rocky-elmo.png';
	import { pageContainerDefaultClasses } from '../constants';
</script>

<div class={pageContainerDefaultClasses}>
	<p class="mt-4">Hey my name is Georg and I'm a software engineer living in Germany.</p>
	<p>
		I love to solve problems (mostly with code) and share my knowledge. I'm always keen to try new
		things and learn new stuff.
	</p>

	<h1 class="mt-4 text-3xl">When I'm not coding</h1>
	I spend a lot of my time with my girlfriend and these two guys.<img
		src={rockyElmoImage}
		alt="animals"
	/>
	Another passion are bicycles and motorocycles.

	<h1 class="mt-8 text-3xl">Why is this website so simple?</h1>
	I often like the simplicity of things and the main purpose of this site is to share content and opinions
	and not a css experience 🦄

	<h1 class="mt-8 text-3xl">My toolbox</h1>
	<p class="mt-4">
		I ❤️ coding with dotnet and svelte.<br />
		Following is a list of tools I use or can tell you somehting about ;) <br />
	</p>

	<ul class="mt-4">
		<li>
			Backend
			<ul>
				<li>C#</li>
				<li>ASP.NET</li>
				<li>Entity Framework</li>
				<li>REST</li>
				<li>gRPC</li>
				<li>GraphQL</li>
				<li>signalR</li>
			</ul>
		</li>
		<li>
			Frontend
			<ul>
				<li>WPF</li>
				<li>JavaScript / TypeScript</li>
				<li>Svelte</li>
				<li>HTML</li>
				<li>CSS</li>
			</ul>
		</li>
		<li>
			Architecture
			<ul>
				<li>Domain-driven Design</li>
				<li>CQRS</li>
			</ul>
		</li>
		<li>
			Databases
			<ul>
				<li>PostgreSQL</li>
				<li>MongoDb</li>
			</ul>
		</li>
		<li>
			Tests
			<ul>
				<li>TDD</li>
				<li>xUnit</li>
				<li>NUnit</li>
				<li>Fluent Assertions</li>
			</ul>
		</li>
		<li>
			DevOps
			<ul>
				<li>Continuous Integration</li>
				<li>Continuous Delivery</li>
				<li>GitHub Actions</li>
				<li>Docker</li>
			</ul>
		</li>
		<li>Clean Code</li>
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
