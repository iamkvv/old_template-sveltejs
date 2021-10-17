<script>
    import SelectProp from "./Components/selectPropContainer.svelte";
    import Item from "./Components/item.svelte";

    let flexProps = [
        { propname: "display", default: "flex" },
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
    //Выбранные значения. Умолч-я берутся из коллекции flexProps
    let selDisplay = flexProps.filter((o) => o.propname == "display")[0]
        .default; //"block"
    let selDirection = flexProps.filter((o) => o.propname == "direction")[0]
        .default; // "row";
    let selJustContent = flexProps.filter((o) => o.propname == "wrap")[0]
        .default; //"flex-start";
    let selWrap = flexProps.filter((o) => o.propname == "justify-content")[0]
        .default; //"flex-start";

    //Работаем с дочерними компонентами (item)
    let childs = [];

    function addItem() {
        //     childs.push({number:childs.length+1});
        //     childs=childs;
        //Подробней: https://ru.svelte.dev/tutorial/updating-arrays-and-objects
        childs = [...childs, { number: childs.length + 1 }];
    }

    [...Array(3).keys()].forEach(() => addItem());

    function deleteItem(idx) {//Тоже можно в одну строку
        childs.splice(idx, 1);
        childs = childs; 
    }
</script>

<!-- Выкладываем combobox'ы -->
{#each flexProps as prp}
    <SelectProp flex_prop={prp} on:selprop={setFlexStyle} />
{/each}

<div>
    <button on:click={addItem}> Добавить дочерний эл-т </button>
</div>
<div class="constr-container">
    <!-- контейнер вложенных элементов -->
    <div
        class="field"
        style="--disp:{selDisplay};
               --dir:{selDirection};
               --jcont:{selJustContent};
               --wrap:{selWrap}"
    >

    {#each childs as child, i}
            <Item index={i} number={child.number} delFunc={deleteItem} />
        {/each}
    </div>
</div>

<style>
    .constr-container {
        min-width: 300px;
        max-width: 90%;
        margin: 20px auto;
        padding: 5px;

        border: 1px solid rgb(138, 109, 216);
    }
    .field {
        border: 3px solid yellow;
        height: 500px;
        padding: 5px;
        /* -flex-переменные- */
        display: var(--disp);
        flex-direction: var(--dir);
        justify-content: var(--jcont);
        flex-wrap: var(--wrap);
    }
</style>
