import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'atc-offer-creator',
	name: 'Kreator Ofert',
	icon: 'edit',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
});
