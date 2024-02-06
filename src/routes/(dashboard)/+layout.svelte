<script lang="ts">
	import '$/app.pcss';
	import Navbar from '$components/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Sidebar from '$components/sidebar.svelte';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
</script>

<ProgressBar class="text-indigo-e500" zIndex={100} />
<ModeWatcher />

<Navbar />
<div class="container mx-auto flex-1">
	<div class="flex-1 items-start md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-6">
		<Sidebar />
		<main class="py-4">
			<slot />
		</main>
	</div>
</div>
