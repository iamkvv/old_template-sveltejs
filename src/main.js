import App1 from './App1.svelte';

const app = new App1({
	target: document.body,
	props: {
		name2: 'мир-world-'
	}
});

//export default app; /// Зачем это нужно???