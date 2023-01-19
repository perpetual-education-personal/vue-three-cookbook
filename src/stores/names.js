import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

const exampleData = [
	{
		id: 'a1',
		name: 'Ash',
	},
	{
		id: 'a2',
		name: 'Anna Lena',
	},
	{
		id: 'a3',
		name: 'Alex',
	},
	{
		id: 'a4',
		name: 'Andy',
	},
	{
		id: 'a5',
		name: 'Alina',
	},
	{
		id: 'b1',
		name: 'Burooj',
	},
	{
		id: 'b2',
		name: 'Brian',
	},
	{
		id: 'd1',
		name: 'Drew',
	},
	{
		id: 'd1',
		name: 'Emily',
	},
	{
		id: 'j1',
		name: 'Jesse',
	},
	{
		id: 'j2',
		name: 'Jess',
	},
	{
		id: 'm1',
		name: 'Miguel',
	},
	{
		id: 'n1',
		name: 'Ned',
	},
];

export const useNamesStore = defineStore('names', () => {
	const namesRef = ref(exampleData);

	const list = reactive(exampleData);

	return {
		namesRef,
		list,
	};
});
