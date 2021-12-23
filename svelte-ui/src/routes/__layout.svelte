<script lang="ts">
	import { text } from 'svelte/internal';
	import '../app.css';
</script>

<main>
	<div class="flex flex-col">
		<div class="w-full bg-gray-50">
			<div class="flex flex-wrap items-center">
				<div class="w-full sm:w-40">
					<div class="w-40 mx-auto">
						<img src="avatar.png" alt="Profile picture" />
					</div>
				</div>
				<div class="w-full sm:w-auto mt-2 sm:mt-0">
					<p class="text-center">
						<a href="/">Blog</a>
					</p>
				</div>
				<!--<div class="w-full sm:ml-4 sm:w-auto">
					<p class="text-center">
						<a href="/lebenslauf">Lebenslauf</a>
					</p>
				</div>-->
			</div>
		</div>

		<div class="container mx-auto mt-8 p-4">
			<slot />
		</div>
	</div>
</main>
