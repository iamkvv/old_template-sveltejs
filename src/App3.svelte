<script>
    import SelectProp from "./Components/selectPropContainer.svelte";

    let flexProps = [
        { propname: "display", default: "block" },
        { propname: "direction", default: "row" },
        { propname: "wrap", default: "nowrap" },
        { propname: "justify-content", default: "flex-start" },
    ];

    function setFlexStyle(event) {
        //Обработчик выбора flex-свойства
        console.log("??", event, event.detail.prop, event.detail.propValue);
        switch (event.detail.prop) {
            case "display":
                selDisplay = event.detail.propValue;
                break;
            case "direction":
                selDirection = event.detail.propValue;
                break;
            case "wrap":
                selWrap = event.detail.propValue;
                break;
            case "justify-content":
                selJustContent = event.detail.propValue;
                break;
            default:
                console.log("No such prop");
        }
    }
    //Выбранные значения. Умолч-я берутся из коллекции flexProps (только в 1-й стр.)
    let selDisplay = flexProps.filter((o) => o.propname == "display")[0]
        .default;
    let selDirection = "row"; //Взять умолчания из коллекции
    let selJustContent = "flex-start";
    let selWrap = "nowrap";

    let itemCount = 3;
</script>

<!-- Выкладываем combobox'ы -->
{#each flexProps as prp}
    <SelectProp flex_prop={prp} on:selprop={setFlexStyle} />
{/each}

<!--вместо этого 
    <SelectProp flex_prop="display" on:selprop={setFlexStyle} />
<br />
<SelectProp flex_prop="direction" on:selprop={setFlexStyle} />
...
-->
<div>
    <button on:click={() => (itemCount += 1)}> Добавить дочерний эл-т </button>
</div>
<div class="constr-container">
    <!-- <div
        style="border:1px solid #ddd;
               min-width:300px;
               margin-right:10px;"
    > -->
    <!-- контейнер вложенных элементов -->
    <div
        class="field"
        style="--disp:{selDisplay};
                   --dir:{selDirection};
                   --jcont:{selJustContent};
                   --wrap:{selWrap}"
    >
        {#each Array(itemCount) as _, i}
            <div class="item">{i + 1}</div>
        {/each}
    </div>
    <!-- </div> -->
</div>

<style>
    .constr-container {
        min-width: 300px;
        max-width: 600px;
        margin: 20px auto;
        padding: 10px;
        border: 1px solid rgb(138, 109, 216);
    }
    .field {
        border: 3px solid yellow;
        height: 300px;
        /* -flex-переменные- */
        display: var(--disp);
        flex-direction: var(--dir);
        justify-content: var(--jcont);
        flex-wrap: var(--wrap);
    }
    .item:last-child {
        background-color: rgb(228, 155, 155);
    }
    .item {
        width: 50px;
        margin-left: 1%;
        background-color: rgb(201, 222, 250);
    }
 </style>
