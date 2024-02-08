<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Button } from '$lib/components/ui/button';
	import { mediaQuery } from 'svelte-legos';
	import * as Command from '$lib/components/ui/command';
	import {
		Cardholder,
		Cards,
		Layout,
		Monitor,
		Moon,
		Person,
		Plus,
		SignOut,
		Stack,
		Sun,
		Users,
		Wrench
	} from 'phosphor-svelte';
	import { onMount } from 'svelte';
	import { commandMenu } from '../store';
	import clsx from 'clsx';
	export let role: 'user' | 'admin';
	const snapPoints = ['350px', 0.6, 0.95];
	let activeSnapPoint: string | number | undefined | null = '350px';
	const isDesktop = mediaQuery('(min-width: 768px)');
	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				$commandMenu = !$commandMenu;
			}
		}
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#if $isDesktop}
	<Dialog.Root open={$commandMenu} onOpenChange={commandMenu.set}>
		<Dialog.Content showClose={false} class="gap-0 p-0 sm:max-w-[425px]">
			<Command.Root>
				<Command.Input placeholder="Type a command or search..." />
				<Command.List
					class="ease h-[var(--cmdk-list-height)] max-h-[400px] transition-[height] duration-500"
				>
					<Command.Empty>No results found.</Command.Empty>
					<Command.Group heading="Projects">
						<Command.Item>
							<Plus class="h-4 w-4" />
							<span>Create new Project</span>
						</Command.Item>
						<Command.Item>
							<Cards class="h-4 w-4" />
							<span>View all projects</span>
						</Command.Item>
					</Command.Group>
					{#if role === "admin"}
					<Command.Separator />
					<Command.Group heading="Admin">
						<Command.Item>
							<Layout class="h-4 w-4" />
							<span>Open admin panel</span>
						</Command.Item>
						<Command.Item>
							<Users class="h-4 w-4" />
							<span>View all users</span>
						</Command.Item>
						<Command.Item>
							<Wrench class="h-4 w-4" />
							<span>Change app settings</span>
						</Command.Item>
					</Command.Group>
					{/if}
					<Command.Separator />
					<Command.Group heading="Account">
						<Command.Item>
							<Person class="h-4 w-4" />
							<span>Profile</span>
							<!-- <Command.Shortcut>⌘P</Command.Shortcut> -->
						</Command.Item>
						<Command.Item>
							<Cardholder class="h-4 w-4" />
							<span>Billing</span>
							<!-- <Command.Shortcut>⌘B</Command.Shortcut> -->
						</Command.Item>
						<Command.Item>
							<SignOut class="h-4 w-4" />
							<span>Logout</span>
							<!-- <Command.Shortcut>⌘S</Command.Shortcut> -->
						</Command.Item>
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Theme">
						<Command.Item>
							<Sun class="h-4 w-4" />
							<span>Light theme</span>
							<!-- <Command.Shortcut>⌘P</Command.Shortcut> -->
						</Command.Item>
						<Command.Item>
							<Moon class="h-4 w-4" />
							<span>Dark theme</span>
							<!-- <Command.Shortcut>⌘B</Command.Shortcut> -->
						</Command.Item>
						<Command.Item>
							<Monitor class="h-4 w-4" />
							<span>System theme</span>
							<!-- <Command.Shortcut>⌘S</Command.Shortcut> -->
						</Command.Item>
					</Command.Group>
				</Command.List>
			</Command.Root>
			<Dialog.Footer
				class="flex items-center !justify-between gap-2 border-t border-border px-3 py-2"
			>
				<Stack class="h-4 w-4 opacity-80" weight="fill" />
				<div class="flex items-center gap-1">
					<Button
						on:click={() => ($commandMenu = false)}
						size="xs"
						class="h-7 text-xs"
						variant="ghost"
					>
						Close
						<kbd class="px-4">Esc</kbd>
					</Button>
					<Button size="xs" class="h-7 text-xs" variant="ghost">
						Navigate
						<kbd>↑</kbd>
						<kbd>↓</kbd>
					</Button>
					<Button size="xs" class="h-7 text-xs" variant="ghost">
						Select
						<kbd>↵</kbd>
					</Button>
				</div>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root openFocus={null} {snapPoints} bind:open={$commandMenu}>
		<Drawer.Content class="h-full max-h-[95%] px-1.5">
			<Command.Root
				autofocus={false}
				class={clsx('mx-auto flex w-full max-w-md flex-col pt-5', {
					'overflow-y-auto': activeSnapPoint === 1,
					'overflow-hidden': activeSnapPoint !== 1
				})}
			>
				<Command.Input placeholder="Type a command or search..." />
				<Command.List>
					<Command.Empty>No results found.</Command.Empty>
					<Command.Group heading="Projects">
						<Command.Item>
							<Plus class="h-4 w-4" />
							<span>Create new Project</span>
						</Command.Item>
						<Command.Item>
							<Cards class="h-4 w-4" />
							<span>View all projects</span>
						</Command.Item>
					</Command.Group>
					{#if role === "admin"}
					<Command.Separator />
					<Command.Group heading="Admin">
						<Command.Item>
							<Layout class="h-4 w-4" />
							<span>Open admin panel</span>
						</Command.Item>
						<Command.Item>
							<Users class="h-4 w-4" />
							<span>View all users</span>
						</Command.Item>
						<Command.Item>
							<Wrench class="h-4 w-4" />
							<span>Change app settings</span>
						</Command.Item>
					</Command.Group>
					{/if}
					<Command.Separator />
					<Command.Group heading="Account">
						<Command.Item>
							<Person class="h-4 w-4" />
							<span>Profile</span>
						</Command.Item>
						<Command.Item>
							<Cardholder class="h-4 w-4" />
							<span>Billing</span>
						</Command.Item>
						<Command.Item>
							<SignOut class="h-4 w-4" />
							<span>Logout</span>
						</Command.Item>
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Theme">
						<Command.Item>
							<Sun class="h-4 w-4" />
							<span>Light theme</span>
						</Command.Item>
						<Command.Item>
							<Moon class="h-4 w-4" />
							<span>Dark theme</span>
						</Command.Item>
						<Command.Item>
							<Monitor class="h-4 w-4" />
							<span>System theme</span>
						</Command.Item>
					</Command.Group>
				</Command.List>
			</Command.Root>
		</Drawer.Content>
	</Drawer.Root>
{/if}
