<script lang="ts">
	import { Drawer, type DrawerSettings } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		bgDrawer: 'bg-primary-800 text-white',
		width: 'w-full',
		height: 'h-[65%]',
		rounded: 'rounded-t-3xl', // Rounded corners at the top
		position: 'bottom' // Position the drawer at the bottom
	};

	function openDrawer() {
		drawerStore.open(drawerSettings);
	}

	function downloadVCard() {
		const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Luis Fernando Miranda
TEL;WORK;VOICE:+51 984266436
EMAIL:luisfmiranda8@gmail.com
END:VCARD`;

		const blob = new Blob([vCardData], { type: 'text/vcard' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'contact.vcf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	function sendEmail() {
		const subject = encodeURIComponent('Contact');
		const body = encodeURIComponent('Hello Luis,\n\nI would like to ...');
		window.location.href = `mailto:luisfmiranda8@gmail.com?subject=${subject}&body=${body}`;
	}
</script>

<div class="w-full flex flex-col space-y-4 relative">
	<!-- Converted "Exchange Contacts" to button -->
	<button
		class="block card card-hover p-3 py-5 w-full text-center rounded-3xl"
		on:click={openDrawer}
	>
		Exchange Contacts
	</button>
	<button
		class="block card card-hover p-3 py-5 w-full text-center rounded-3xl"
		on:click={downloadVCard}
	>
		Save Contact
	</button>
	<button
		class="block card card-hover p-3 py-5 w-full text-center rounded-3xl"
		on:click={sendEmail}
	>
		Email Me
	</button>
</div>
