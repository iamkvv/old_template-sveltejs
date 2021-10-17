<script>
    export let index;
    export let number;
    export let delFunc;
    let itemOrder = 0;
    let itemFlexGrow = 0;
    let itemFlexShrink = 1;
</script>

<div
    class="item"
    style="--order:{itemOrder};
           --flex-grow:{itemFlexGrow};
           --flex-shrink:{itemFlexShrink}"
>
    <div class="item-caption">
        item {index} / {number}
    </div>

    <div class="tooltip">
        <input
            class="itemprop-value"
            type="number"
            bind:value={itemOrder}
            min="0"
            max="10"
        />
        <span class="tooltiptext">order</span>
    </div>
    <div class="tooltip">
        <input
            class="itemprop-value"
            type="number"
            bind:value={itemFlexGrow}
            min="0"
            max="10"
        />
        <span class="tooltiptext">flex-grow</span>
    </div>
    <input
        class="itemprop-value"
        type="number"
        bind:value={itemFlexShrink}
        min="0"
        max="10"
    />
<!-- Кнопка удаления -->
    <div class="del" on:click={() => delFunc(index)}>
        <span>&times;</span>
    </div>
</div>

<style>
    .item {
        order: var(--order);
        flex-grow: var(--flex-grow);
        flex-shrink: var(--flex-shrink);
        background-color: beige;
        width: 150px;
        height: 100px;
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
        border: 1px solid silver;
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
    .tooltip {
        position: relative;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        position: absolute;
        font-size: 0.75em;
        width: 60px;
        bottom: 100%;
        margin-left: -5px;
        background-color: blue;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 3px ;
        z-index: 1;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>
