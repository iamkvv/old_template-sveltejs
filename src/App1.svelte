<script>
	import sum from "lodash/sum";
	import concat from "lodash/concat";

	//npm i --save lodash
	//https://www.w3schools.com/html/default.asp
	//https://only-to-top.ru/blog/coding/2020-12-30-js-array-cheatsheet.html

	import Flexlearn from "./Flexlearn.svelte"


	export let arr;
	let x = sum([1, 2, 3, 4]);

	export let toggle = true;

	function handleMessage(event) {
		switch (event.detail.text) {
			case "lodash":
				console.log("LODASH");
				arr = concat(arr, { item: "item: 999", index: "LD" });
				{
					break;
				}
			case "js":
				console.log("JS");
				//1-й вар-т arr.push({item: 'item: 777', index: 'JS'});
				// arr = arr;
				//2-й вар-т
				arr = arr.concat({ item: "item: 555", index: "JS" });
				//3-й вар-т arr = [...arr, {item: 'item: 444', index: 'JS'}]
				{
					break;
				}
			default:
				console.log("??");
		}
	}

	function tgl() {
		toggle = !toggle;
	}

	let test = "column";
     let test2 ="block";
</script>

<main>
<!-- 	
	{#if toggle}
		<Comp1 />
	{:else}
		<Comp2 />
	{/if}

	<button on:click={tgl}>Toggle</button>

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
	<div  class="container" style="--qwe:{test};--bl:{test2}">
		<div>1</div>
		<div>2</div>
	</div> -->
</main>

<style>
	/* .container {
		display: var(--bl);
		flex-direction: var(--qwe);
	}
	table {
		border-collapse: collapse;
	}
	td {
		padding: 5px;
	}
	main {
		margin: 20px;
	} */
</style>
