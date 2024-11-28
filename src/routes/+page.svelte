<script lang="ts">
	import { onMount } from 'svelte';

	let telegramLink = 'https://t.me/+Yr9xaXPWPFViMzM5';
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
	<div class="container mx-auto max-w-4xl px-4 py-16">
		<header class="mb-12 text-center">
			<h1
				class="mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-bold text-transparent"
			>
				Hashmon
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-gray-300">
				Bringing Monster-Collection Gaming to the Ergo Ecosystem
			</p>
		</header>

		<section class="mb-12 rounded-xl bg-gray-800/50 p-8 shadow-2xl">
			<h2 class="mb-6 text-center text-3xl font-semibold">Project Concept</h2>
			<div class="space-y-4 text-gray-200">
				<div class="flex items-start space-x-4">
					<svg
						class="h-6 w-6 flex-shrink-0 text-purple-400"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2l4.456.647a1 1 0 01.557 1.706l-3.22 3.138.76 4.427a1 1 0 01-1.45 1.054L10 15.089l-3.971 2.084a1 1 0 01-1.45-1.054l.76-4.427-3.22-3.138a1 1 0 01.557-1.706l4.456-.647 1.179-2.456A1 1 0 0110 2z"
							clip-rule="evenodd"
						/>
					</svg>
					<p>Mining-based NFT rewards through the miner rights protocol</p>
				</div>
				<div class="flex items-start space-x-4">
					<svg
						class="h-6 w-6 flex-shrink-0 text-purple-400"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
						<path
							fill-rule="evenodd"
							d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
					<p>Potential evolution mechanics using mining-earned shards</p>
				</div>
				<div class="flex items-start space-x-4">
					<svg
						class="h-6 w-6 flex-shrink-0 text-purple-400"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
						<path
							fill-rule="evenodd"
							d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<p>Possible grand prize pool for collection completion</p>
				</div>
			</div>
		</section>

		<section class="text-center">
			<h2 class="mb-6 text-3xl font-semibold">Join the Community</h2>
			<div class="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
				<a
					href={telegramLink}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-bold text-white transition duration-300 hover:from-blue-600 hover:to-purple-700"
				>
					<svg class="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 10.42c-.63-.39-1.37-.74-2.13-1.07-1.26-.57-1.89-1.16-1.89-1.85 0-.96.89-1.23 1.5-1.23.47 0 1 .16 1.4.41.47.3 1.1.24 1.48-.16l.01-.01a1.1 1.1 0 00-.16-1.64c-.57-.43-1.56-.74-2.48-.74-1.66 0-3.5.73-3.5 3.23 0 1.36.66 2.2 1.73 2.83.85.5 1.73.89 2.56 1.22 1.16.44 1.8 1.08 1.8 1.86 0 1.42-1.4 1.67-2.05 1.67-.58 0-1.24-.22-1.7-.57a1.11 1.11 0 00-1.42.06l-.01.01a1.1 1.1 0 00.06 1.55c.71.62 1.76.96 2.79.96 1.96 0 3.85-1.06 3.85-3.27 0-1.57-.86-2.39-2.05-3z"
						/>
					</svg>
					Join Telegram Community
				</a>
			</div>
		</section>

		<section class="mt-12 rounded-xl bg-gray-800/50 p-8 shadow-2xl">
			<h2 class="mb-6 text-center text-3xl font-semibold">We Want YOUR Input!</h2>
			<div class="space-y-4 text-center text-gray-300">
				<p>
					This is an early exploration. We're looking to build something truly worth your time and
					engagement.
				</p>
				<p>Help us shape this potential project. What excites you about this concept?</p>
				<p class="italic text-purple-300">
					Should we call them ErgoMons, ErgMons, or something else entirely?
				</p>
				<p>
					Join the discussion and help us discover blockchain fundamentals in a fun, engaging way!
				</p>
			</div>
		</section>
	</div>

	<footer class="py-4 text-center text-gray-500">
		© {new Date().getFullYear()} Hashmon Project. All rights reserved.
	</footer>
</div>
