<script>
    import Tooltip from "svelte-atoms/Tooltip.svelte";
    export let index;
    export let number;
    export let delFunc;
    export let width = 2;

    let itemOrder = 0;
    let itemFlexGrow = 0;
    let itemFlexShrink = 1;
    let itemFlexBasis = 'auto';
    let itemAlignSelf = 'auto';
</script>

<div
    class="item"
    style="--order:{itemOrder};
           --flex-grow:{itemFlexGrow};
           --flex-shrink:{itemFlexShrink};
           --flex-basis:{itemFlexBasis};
           --alignself:{itemAlignSelf};
           --wdth:{width}%;"
>
    <div
        class="item-controls"
        style="--dsp:{width < 5
            ? 'none'
            : 'flex'}; flex-direction:column;align-items: center;"
    >
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
        <Tooltip text="flex-basis">
            <input
            style="max-width:55px"
                class="itemprop-value"
                type="text"
                bind:value={itemFlexBasis}
            />
        </Tooltip>
        <Tooltip text="align-self">
            <select bind:value={itemAlignSelf}>
                    <option value='auto'>
                        auto
                    </option>
                    <option value='flex-start'>
                        flex-start
                    </option>
                    <option value='flex-end'>
                        flex-end
                    </option>
                    <option value='center'>
                        center
                    </option>
                    <option value='baseline'>
                        baseline
                    </option>
            </select>
        </Tooltip>
    </div>

    <!-- Кнопка удаления -->
    <div class="del" on:click={() => delFunc(index)}>
        <span>&times;</span>
    </div>
</div>

<style>
    select{
        max-width:53px;
        font-size:0.75em;
        padding:0;
        margin:0;
    }
    .item-controls {
        display: var(--dsp);
    }
    .item {
        order: var(--order);
        flex-grow: var(--flex-grow);
        flex-shrink: var(--flex-shrink);
        flex-basis: var(--flex-basis);
        align-self: var(--alignself);
        width: var(--wdth);
        display: block;  /* var(--dsp); <- убрать!!!*/
        background-color:#5e9fd5;/* #7ccc64;*/ 
        box-sizing: border-box;
        /*height: auto;*/ /*при знач. auto item заполняет всю вертикаль */
        padding: 5px;
        margin-left: 0.5%;
        margin-bottom: 0.5%;
        position: relative;
    }
    .item-caption {
        font-size: 0.75em;
        margin-bottom: 5px;
        color: #fff;
    }

    .itemprop-value {
        display: block;
        width:90%;/*иначе ширина может быть больше родителя*/ /*var(--wdth);*/
        font-size: 0.75em;
        margin: 5px auto;
        padding: 0;
    }
    .del {
        text-align: center;
        line-height: 0.9em;
        position: absolute;
        right: 0px;
        top: 0px;
        border-radius: 50%;
        height: 1em;
        width: 1em;
        background-color: rgb(221, 131, 128);
        color: white;
        cursor: pointer;
    }
</style>
