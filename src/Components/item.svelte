<script>
    import Tooltip from "svelte-atoms/Tooltip.svelte";
    export let index;
    export let number;
    export let delFunc;
    export let width = 2;

    let itemOrder = 0;
    let itemFlexGrow = 0;
    let itemFlexShrink = 1;
</script>

<div
    class="item"
    style="--order:{itemOrder};
           --flex-grow:{itemFlexGrow};
           --flex-shrink:{itemFlexShrink};
           --wdth:{width}%;"
>
    <div class="item-controls" style="--dsp:{width < 5 ? 'none' : 'flex'}; flex-direction:column;align-items: center;">
        <div class="item-caption">
            {index} / {number}- {width}%
        </div>

        <Tooltip text="flex-order">
            <input
                class="itemprop-value"
                type="number"
                bind:value={itemOrder}
                min="0"
                max="10"
            />
        </Tooltip>

        <Tooltip text="flex-grow">
            <input
                class="itemprop-value"
                type="number"
                bind:value={itemFlexGrow}
                min="0"
                max="10"
            />
        </Tooltip>

        <Tooltip text="flex-shrink">
            <input
                class="itemprop-value"
                type="number"
                bind:value={itemFlexShrink}
                min="0"
                max="10"
            />
        </Tooltip>
    </div>
    <!-- Кнопка удаления -->
    <div class="del" on:click={() => delFunc(index)}>
        <span>&times;</span>
    </div>
</div>

<style>
    .item-controls {
        display: var(--dsp);
    }
    .item {
        order: var(--order);
        flex-grow: var(--flex-grow);
        flex-shrink: var(--flex-shrink);
        width: var(--wdth);
        display: var(--dsp);
        background-color: beige;
        /* width: 150px; */
        height: auto;
        padding: 5px;
        margin-left: 0.5%;
        margin-bottom: 0.5%;
        position: relative;
    }
    .item-caption {
        font-size: 0.75em;
        margin-bottom: 5px;
    }

    .itemprop-value {
        display: block;
        font-size: 0.75em;
        margin: 0;
        padding: 0;
        width: 95%;
    }
    .del {
        color: white;
        position: absolute;
        height: 1em;
        width: 1em;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: end;
        right: 0px;
        top: -0px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>
