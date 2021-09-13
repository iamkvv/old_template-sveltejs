import App1 from './App1.svelte';

const app = new App1({
	target: document.body,
	props: {
		arr: Array.from({ length: 5 }, (v, k) => {return {item: 'item: ' + k*k, index: k}})
	}
});

//export default app; 