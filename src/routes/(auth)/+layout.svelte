<script lang="ts">
	import '$/app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
</script>

<ProgressBar zIndex={100} />
<ModeWatcher />
<div class="">
	<main class="">
		<slot />
	</main>
</div>
