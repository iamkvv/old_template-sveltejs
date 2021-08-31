<script>
	import sum from "lodash/sum";
	import Test from './Test.svelte'

	export let name2;
	let x = sum([1, 2, 3,4]);
	//import app from './main';
	//let q = app.props.name;
</script>

<main>
	{x}
	<Test name='qwe'/>
	<h1>HI {name2}!!</h1>
	<h2>это проверка</h2>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	}

	h1 {
		color: #423b9e;
		text-transform: lowercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
