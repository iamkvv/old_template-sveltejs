import App from './App3.svelte';

const app = new App({
	target: document.body,
	props: {
		arr: Array.from({ length: 5 }, (v, k) =>{return {item: 'item: '+ k * k, index: k}})
	}
});

//export default app; 