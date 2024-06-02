<script lang="ts">
	import ExchangeContactForm from '$lib/ExchangeContactForm.svelte';
	import '../app.postcss';
	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';
	initializeStores();
</script>

<Drawer>
	<div class="container h-full flex flex-col justify-center items-center mx-auto">
		<div class="mb-8 mt-6 p-2 h-full flex flex-col w-full">
			<div>
				<p class="font-semibold text-2xl text-center">Let's Connect!</p>
				<div class="font-semibold text-base text-center mt-2">
					<p class="inline">Share your contact information with</p>
					<p class="inline font-extrabold">Me</p>
				</div>
			</div>
			<div class="mt-8">
				<ExchangeContactForm />
			</div>
		</div>
	</div>
</Drawer>
<slot />
