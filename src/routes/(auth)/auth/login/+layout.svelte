<script lang="ts">
	import '$/app.pcss';
	import Navbar from '$lib/components/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Sidebar from '$lib/components/sidebar.svelte';
</script>

<ModeWatcher />

<div class="">
	<main class="">
		<slot />
	</main>
</div>
