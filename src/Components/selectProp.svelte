<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let options = {
        display: [
            { id: "block", text: "block" },
            { id: "none", text: "none" },
            { id: "flex", text: "flex" },
            { id: "inline-flex", text: "inline-flex" }
            
        ],
        direction: [
            { id: "row", text: "row" },
            { id: "row-reverse", text: "row-reverse" },
            { id: "column", text: "column" },
            { id: "column-reverse", text: "column-reverse" },
        ],
        "justify-content": [
            { id: "flex-start", text: "flex-start" },
            { id: "flex-end", text: "flex-end" },
            { id: "center", text: "center" },
            { id: "space-between", text: "space-between" },
            { id: "space-around", text: "space-around" },
        ],
    };
    export let flex_prop;

    function onSelectProp(e) {
        dispatch("selprop", {
            prop:flex_prop,
            id: e.target.options[e.target.options.selectedIndex].text
        });
    }
</script>

<div>
    <select
        class="select-prop"
        on:blur={(e) => console.log("??", 123)}
        on:change={(e) => onSelectProp(e)}
    >
        {#each options[flex_prop] as prp}
            <option value={prp.id} >
                {prp.text}
            </option>
        {/each}
    </select>
</div>

<style>
    .select-prop {
        padding: 0px;
        margin: 0px;
        min-width: 120px;
        background-color: blanchedalmond;
    }
</style>
