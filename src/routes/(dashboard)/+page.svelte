<script lang="ts">
	import * as Alert from '$components/ui/alert';
	import { Button } from '$components/ui/button';
	import { Warning } from 'phosphor-svelte';
</script>

<div class="space-y-2">
	<Alert.Root>
		<Warning weight="fill" class="h-4 w-4 fill-yellow-500" />
		<Alert.Title>Beta preview</Alert.Title>
		<Alert.Description
			>Manager is currently in beta preview, getting errors is expected.</Alert.Description
		>
	</Alert.Root>
	<div class="">
		<Button href="/auth/register" size="xs">Button</Button>
	</div>
</div>
