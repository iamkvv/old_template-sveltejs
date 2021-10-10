<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let options = {
        display: [
            { propValue: "block", text: "block" },
            { propValue: "flex", text: "flex" },
            { propValue: "inline-flex", text: "inline-flex" },
            { propValue: "none", text: "none" },
        ],
        direction: [
            { propValue: "row", text: "row" },
            { propValue: "row-reverse", text: "row-reverse" },
            { propValue: "column", text: "column" },
            { propValue: "column-reverse", text: "column-reverse" },
        ],
        "justify-content": [
            { propValue: "flex-start", text: "flex-start" },
            { propValue: "flex-end", text: "flex-end" },
            { propValue: "center", text: "center" },
            { propValue: "space-between", text: "space-between" },
            { propValue: "space-around", text: "space-around" },
        ],
        "wrap": [
            { propValue: "wrap", text: "wrap" },
            { propValue: "nowrap", text: "nowrap" },
            { propValue: "wrap-reverse", text: "wrap-reverse" },
            { propValue: "unset", text: "unset" },
        ],
    };
    export let flex_prop;

    function onSelectProp(e) {
        dispatch("selprop", {
            prop: flex_prop.propname,
            propValue: e.target.options[e.target.options.selectedIndex].text,
        });
    }
</script>

<div>
    <select value={flex_prop.default}
        class="select-prop"
        on:blur={null}
        on:change={(e) => onSelectProp(e)}
    >
        {#each options[flex_prop.propname] as prp}
            <option value={prp.propValue}>
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
