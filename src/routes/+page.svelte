<script lang="ts">
	import Avatar from '$lib/Avatar.svelte';
	import SocialNetwork from '$lib/SocialNetwork.svelte';
	import TreeButtons from '$lib/TreeButtons.svelte';
</script>

<div class="container h-full flex flex-col justify-center items-center mx-auto md:w-[40rem]">
	<div class="mb-8 p-10 h-full flex flex-col w-full">
		<div class="justify-center items-center flex flex-col">
			<!--Imagent-->
			<div>
				<Avatar />
			</div>
			<!--Nombre-->
			<div class="mb-6 mt-7 relative">
				<div class="w-full">
					<h1 class="text-center font-semibold text-3xl font-inherit mb-3">
						Luis Fernando Miranda
					</h1>
				</div>
				<p class="text-gray-400 m-0 font-normal leading-5 font-inter text-center">
					Senior Software Developer
				</p>
			</div>
		</div>
		<div class="w-full">
			<TreeButtons />
		</div>
		<div class="mt-8">
			<SocialNetwork />
		</div>
	</div>
</div>
