<script lang="ts">
	import { onMount } from 'svelte';
	import emailjs from 'emailjs-com';

	onMount(() => {
		(function () {
			emailjs.init('je0BYHEty2R_0oJv9');
		})();
	});

	function validateEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	function validatePhoneNumber(phoneNumber: string): boolean {
		const phoneRegex = /^[0-9\s-]+$/;
		return phoneRegex.test(phoneNumber);
	}

	function handleSubmit(event: Event) {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const email = (form.elements.namedItem('email') as HTMLInputElement).value;
		const phoneNumber = (form.elements.namedItem('phone_number') as HTMLInputElement).value;

		if (!validateEmail(email)) {
			alert('Invalid email format');
			return;
		}

		if (!validatePhoneNumber(phoneNumber)) {
			alert('Invalid phone number format');
			return;
		}

		const templateParams = {
			first_name: (form.elements.namedItem('first_name') as HTMLInputElement).value,
			last_name: (form.elements.namedItem('last_name') as HTMLInputElement).value,
			email,
			phone_number: phoneNumber
		};

		emailjs.send('service_5ucmsvr', 'template_0m34kke', templateParams).then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);
				alert('Email sent successfully!');
			},
			(error) => {
				console.log('FAILED...', error);
				alert('Failed to send email. Please try again later.');
			}
		);
	}
</script>

<form class="space-y-6" on:submit={handleSubmit}>
	<!-- Name and Last Name -->
	<div class="space-y-4">
		<!-- First Name -->
		<div class="grid grid-cols-2 gap-3">
			<div class="form-control">
				<label for="first-name" class="label">
					<span class="label-text">First name</span>
				</label>
				<input
					id="first-name"
					class="input input-bordered w-full"
					type="text"
					placeholder="First Name"
					autocomplete="given-name"
					required
					name="first_name"
				/>
			</div>
			<!-- Last Name -->
			<div class="form-control">
				<label for="last-name" class="label">
					<span class="label-text">Last name</span>
				</label>
				<input
					id="last-name"
					class="input input-bordered w-full"
					type="text"
					placeholder="Last Name"
					autocomplete="family-name"
					required
					name="last_name"
				/>
			</div>
		</div>
		<!-- Email -->
		<div class="form-control">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				id="email"
				class="input input-bordered w-full"
				type="email"
				placeholder="Email"
				autocomplete="email"
				required
				name="email"
			/>
		</div>
		<!-- Phone number -->
		<div class="form-control">
			<label for="phone-number" class="label">
				<span class="label-text">Phone number</span>
			</label>
			<input
				id="phone-number"
				class="input input-bordered w-full"
				type="tel"
				placeholder="Phone number"
				autocomplete="tel"
				required
				name="phone_number"
			/>
		</div>
	</div>
	<!-- Submit Button -->
	<div class="w-full flex flex-col px-6 pt-4">
		<button class="btn variant-filled p-4 rounded-3xl" type="submit">Send</button>
	</div>
</form>
