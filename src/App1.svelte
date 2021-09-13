<script>
	import sum from "lodash/sum";
	import concat from "lodash/concat";
	import Test from "./Test.svelte";

	export let arr;
	let x = sum([1, 2, 3, 4]);

	function handleMessage(event) {
		switch (event.detail.text) {
			case "lodash": 
				console.log("LODASH");
				arr = concat(arr, {item: 'item: 999', index: 'LD'})
				{break}
			case "js": 
				console.log("JS");
				// arr.push({item: 'item: 777', index: 'JS'});
	            // arr = arr;
                arr = [...arr, {item: 'item: 777', index: 'JS'}] 
				{break}
			default:
				console.log("??");
		}
	}
</script>

<main>
	<table border="1px">
		{#each arr as a}
			<tr>
				<td>{a.index}</td>
				<td> {a.item}</td>
			</tr>
		{/each}
	</table>

	<Test
		on:message={handleMessage}
		text="Добавить элемент в массив (Lodash)"
		test="lodash"
	/>
	<Test
		on:message={handleMessage}
		text="Добавить элемент в массив (JS)"
		test="js"
	/>
</main>

<style>
	table {
		border-collapse: collapse;
	}
	td {
		padding: 5px;
	}
	main {
		margin: 20px;
	}
</style>
