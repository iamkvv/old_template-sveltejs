<script>
    import SelectProp from "./Components/selectPropContainer.svelte";
    import Item from "./Components/item.svelte";
    import Widthrange from "./Components/widthRange.svelte";

    //https://svelte-atoms.web.app/
    import Button from "svelte-atoms/Button.svelte";
    import Chip from "svelte-atoms/Chip.svelte";
    import Variables from "svelte-atoms/Variables.svelte";

    let flexProps = [
        { propname: "display", default: "flex" },
        { propname: "direction", default: "row" },
        { propname: "wrap", default: "nowrap" },
        { propname: "justify-content", default: "flex-start" },
    ];

    let itemWidth = 20;

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
        console.log("addItem");
        //     childs.push({number:childs.length+1});
        //     childs=childs;
        //Подробней: https://ru.svelte.dev/tutorial/updating-arrays-and-objects
        childs = [...childs, { number: childs.length + 1 }];
    }

    [...Array(3).keys()].forEach(() => addItem());

    function deleteItem(idx) {
        //Тоже можно в одну строку
        childs.splice(idx, 1);
        childs = childs;
    }

    function setItemWidth(e) {
        console.log("itemWidth", e.target.value);
        itemWidth = e.target.value;
    }
</script>

<div class="app-container">
    <div class="top gen-caption">FLEX-BOX GENERATOR</div>
    <div class="main">
        <div class="content">
            <div class="control-childs">
                <Widthrange widthDef={itemWidth} {setItemWidth} />
                <div on:click={addItem}>
                    <Chip
                        style="margin-top:5px"
                        selected
                        text="Элемент"
                        iconLeft="plus"
                    />
                </div>
                <!-- <Button on:click={addItem} iconLeft="plus">Добавить компонент</Button>
            -->
            </div>
            <div
                class="field"
                style="--disp:{selDisplay};
                   --dir:{selDirection};
                   --jcont:{selJustContent};
                   --wrap:{selWrap}"
            >
                {#each childs as child, i}
                    <Item
                        index={i}
                        width={itemWidth}
                        number={child.number}
                        delFunc={deleteItem}
                    />
                {/each}
            </div>

            <div />
        </div>
        <div class="controls">
            <div
                style="height: 55px;
                border-bottom: 1px solid silver;
                box-sizing: border-box;
                padding: 15px 0;
                letter-spacing: 8px;
                color: #358ed7;
                font-weight:700;"
            >
                Flex-свойства
            </div>
            <div>
                {#each flexProps as prp}
                    <SelectProp flex_prop={prp} on:selprop={setFlexStyle} />
                {/each}
            </div>
        </div>
    </div>
    <div class="bottom" />
</div>

<style>
    .app-container {
        min-height: 300px;
        min-width: 500px;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
    }

    .main {
        display: flex;
        flex-direction: row;
        flex-grow: 5;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .content {
        flex-basis: 100%;
        min-width: 200px;
        background-color: #f8fffe;
    }

    .controls {
        text-align: center;
        min-width: 250px;
        flex-basis: 250px;
        background-color: #e0ffec;
    }
    .control-childs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 55px;
        box-sizing: border-box;
        border-bottom: 1px solid silver;
    }

    .top,
    .bottom {
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
        background-color: aqua;
    }

    .gen-caption {
        font-size: 1.5em;
        text-align: center;
        color: aqua;
        background: #5e9fd5;
        letter-spacing: 8px;
        font-weight: 600;
        text-shadow: 2px 2px 2px #CE5937;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 4px 4px 8px 2px rgba(34, 60, 80, 0.2);

    }
    .field {
        border: 1px solid silver;
        padding: 5px;
        min-height: 500px;
        /* -flex-переменные- */
        display: var(--disp);
        flex-direction: var(--dir);
        justify-content: var(--jcont);
        flex-wrap: var(--wrap);
    }
</style>
