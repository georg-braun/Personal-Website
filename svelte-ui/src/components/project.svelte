<script>
	export let title = 'Projekt';
	export let description = 'Projektbeschreibung';
	export let imagePath = 'default-project-image.png';
</script>

<div class="border-solid border-2 overflow-clip shadow-xl  rounded-md  md:w-1/3 m-4">
	<div>
		<img src={imagePath} alt="Profile picture" />
		<div class="p-2">
			<p class="text-2xl font-semibold ">{title}</p>
			<p class="mt-2">
				{description}
				<!-- Link zum Blog-Post -->
			</p>
		</div>
	</div>
</div>
