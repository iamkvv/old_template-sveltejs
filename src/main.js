import App1 from './App1.svelte';

const app = new App1({
	target: document.body,
	props: {
		name2: 'мир-world-',
		arr: Array.from({ length: 5 }, (v, k) => {return {item: 'item: ' + k*k, index: k}})
	}
});

//export default app; /// Зачем это нужно???