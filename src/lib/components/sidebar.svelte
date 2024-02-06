<script lang="ts">
	import { page } from '$app/stores';
	import { House, SquaresFour } from 'phosphor-svelte';
	import SidebarItem from './sidebar-item.svelte';
	import { sidebarLinks } from '$lib/config/sidebar-links';
</script>

<aside
	class="fixed left-0 top-[4rem] z-30 flex h-[calc(100vh-4rem)] min-w-[16rem] max-w-[16rem] shrink-0 -translate-x-[200%] transform flex-col border-r border-neutral-200 bg-white antialiased transition-[width,transform] duration-[500ms] ease-in data-[open=true]:translate-x-0 data-[open=false]:duration-[1000ms] dark:border-neutral-900 dark:bg-neutral-950 md:sticky md:-ml-4 md:block md:translate-x-0 md:duration-300"
>
	<nav
		class="flex h-full flex-1 flex-col gap-y-6 overflow-hidden overflow-y-auto overflow-x-hidden px-3 py-4 pr-2"
	>
		<ul class="flex flex-col gap-y-1">
			{#each sidebarLinks as link}
				<SidebarItem active={$page.url.pathname === link.href} href={link.href}>
					<svelte:component
						this={link.icon}
						slot="icon"
						weight={$page.url.pathname === link.href ? 'fill' : 'regular'}
						class="size-6"
					/>
					<svelte:fragment slot="title">{link.title}</svelte:fragment>
				</SidebarItem>
			{/each}
		</ul>
	</nav>
</aside>
