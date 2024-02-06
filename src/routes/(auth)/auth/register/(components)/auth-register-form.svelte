<script lang="ts" context="module">
	import { z } from 'zod';
	export const registerFormSchema = z.object({
		username: z.string().min(2).max(50),
		email: z.string().email(),
		password: z.string().min(6).max(50),
		confirmPassword: z.string().min(6).max(50),
		rememberMe: z.boolean().default(true)
	});
	type FormSchema = typeof registerFormSchema;
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form';

	import type { SuperValidated } from 'sveltekit-superforms';
	import { Button } from '$components/ui/button';
	import { cn } from '$lib/utils';
	import { CircleNotch, GithubLogo, GoogleLogo } from 'phosphor-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let data: SuperValidated<FormSchema>;
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<Form.Root
		form={data}
		schema={registerFormSchema}
		let:config
		method="POST"
		class="grid gap-0.5 sm:grid-cols-2 sm:gap-1"
		debug
	>
		<Form.Field {config} name="rememberMe">
			<Form.Item
				class="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
			>
				<Form.Checkbox />
				<div class="space-y-1 leading-none">
					<Form.Label>Use different settings for my mobile devices</Form.Label>
					<Form.Description>
						You can manage your mobile notifications in the <a href="/auth/register"
							>mobile settings</a
						> page.
					</Form.Description>
				</div>
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="username">
			<Form.Item>
				<Form.Label>Username</Form.Label>
				<Form.Input placeholder="my username" />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label>Email</Form.Label>
				<Form.Input placeholder="myemail@gmail.com" />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="password">
			<Form.Item>
				<Form.Label>Password</Form.Label>
				<Form.Input
					placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
					type="password"
				/>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="confirmPassword">
			<Form.Item>
				<Form.Label>Confirm Password</Form.Label>
				<Form.Input
					placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
					type="password"
				/>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Button size="sm" class="sm:col-span-2" disabled={false}>
			<!-- {#if isLoading}
					<CircleNotch class="mr-2 h-4 w-4 animate-spin" />
				{/if} -->
			Create account</Form.Button
		>
	</Form.Root>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
		</div>
	</div>
	<div class="grid gap-1 sm:grid-cols-2">
		<Button variant="outline" size="sm" type="button" disabled={false}>
			<GithubLogo class="mr-2 h-4 w-4" />
			{' '}
			GitHub
		</Button>
		<Button variant="default" size="sm" type="button" disabled={false}>
			<GoogleLogo class="mr-2 h-4 w-4" />
			{' '}
			Google
		</Button>
	</div>
</div>
