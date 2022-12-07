<script>
	export let rockyElmoImage = 'rocky-elmo.png';
	import { pageContainerDefaultClasses } from '../constants';
</script>

<div class={pageContainerDefaultClasses}>
	<p class="mt-4">Hey I'm Georg and live with my family in Germany.</p>
	<p>I love to solve problems (mostly with code) and share my knowledge.</p>

	<h1 class="mt-4 text-3xl">My spare time I spend with</h1>
	<ul>
		<li>my girlfriend</li>
		<li>these two guys <img src={rockyElmoImage} alt="animals" /></li>
		<li>bicycles</li>
		<li>motorcycles</li>
	</ul>

	<h1 class="mt-8 text-3xl">My computer science toolbox</h1>
	<p class="mt-4">
		I'm a Fullstack developer with a preference for the backend. This gives me the ability to
		realize my project ideas. I'm always keen to learn new stuff and pick the right tool for the
		job.<br />
		Following is a list of my tools ;) <br />
	</p>

	<ul class="mt-4">
		<li>
			Programming languages
			<ul>
				<li>C#</li>
				<li>JavaScript / TypeScript</li>
			</ul>
		</li>
		<li>
			Desktop Client
			<ul>
				<li>WPF</li>
			</ul>
		</li>
		<li>
			Web Backend
			<ul>
				<li>ASP.NET</li>
			</ul>
		</li>
		<li>
			Web Client
			<ul>
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
			ORM
			<ul>
				<li>Entity Framework</li>
			</ul>
		</li>
		<li>
			Communication
			<ul>
				<li>REST</li>
				<li>gRPC</li>
				<li>signalR</li>
			</ul>
		</li>
		<li>
			Tests
			<ul>
				<li>TDD</li>
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
