<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import {options} from './selectOptions' //options для combobox'ов

    export let flex_prop;

    function onSelectProp(e) {//вызов события и формирование его данных
        dispatch("selprop", {
            prop: flex_prop.propname,
            propValue: e.target.options[e.target.options.selectedIndex].value,
        });
    }
</script>

    <select value={flex_prop.default}
        class="selector"
        on:blur={null}
        on:change={(e) => onSelectProp(e)}
    >
        {#each options[flex_prop.propname] as prp}
            <option value={prp.propValue}>
                {prp.text}
            </option>
        {/each}
    </select>

<style>
    .selector {
        padding: 0px;
        margin: 0px;
        min-width: 120px;
        background-color: blanchedalmond;
    }
</style>
