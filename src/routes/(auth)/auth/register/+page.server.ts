import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { registerFormSchema } from './(components)/auth-register-form.svelte';
export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(registerFormSchema)
	};
};
export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, registerFormSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};
