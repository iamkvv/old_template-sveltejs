<script>
    import SelectProp from "./Components/selectPropContainer.svelte";
    import Item from "./Components/item.svelte";
    import Widthrange from "./Components/widthRange.svelte";

    //https://svelte-atoms.web.app/
    import Button from "svelte-atoms/Button.svelte";
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

<div class="container1">
    <div class="top">
        <p>Заголовок 1</p>
        <p>Заголовок 2</p>
    </div>
    <div class="main">
        <div class="content">
            <div
                style="display:flex;
                      flex-direction:row;
            justify-content:space-between;
            align-items:center;  
            border-bottom:1px solid silver;"
            >
                <Widthrange widthDef={itemWidth} {setItemWidth} />
                <Button
                    on:click={addItem}
                    style="padding:0px;margin-top:8px;height:40px;"
                    iconLeft="plus">Элемент</Button
                >
            </div>
            <div>
                <p>Content1_</p>
                <p>Content2_</p>
                <p>Content3_</p>
                <p>Content1</p>
                <p>Content2</p>
                <p>Content3</p>
                <p>Content4</p>
                <p>Content5</p>
                <p>Content6</p>
                <p>Content7</p>
                <p>Content8</p>
                <p>Content9</p>
                <p>Content10</p>
            </div>
        </div>
        <div class="controls">
            <div style="height:53px">Flex-свойства</div>
            <div>
                {#each flexProps as prp}
                    <SelectProp flex_prop={prp} on:selprop={setFlexStyle} />
                {/each}
            </div>
        </div>
    </div>
    <div class="bottom">
        <p>Подвал 1</p>
        <p>подвал 2</p>
    </div>
</div>

<style>
    .container1 {
        display: flex;
        flex-direction: column;
        min-width: 400px;
    }

    .main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* align-items: stretch; */
        flex-grow: 1;
    }

    .content {
        /* min-width: 500px; */
        display: flex;
        flex-direction: column;
        flex-grow: 5;
        background-color: #ddffe5;
    }

    .controls {
        /* flex-grow: 1; */
        text-align: center;
        flex-grow: 0;
        width: 250px;
        background-color: #eee;
    }

    .top,
    .bottom {
        box-sizing: border-box;
        min-width: 495px;
        padding: 5px;
        background-color: aqua;
    }
</style>
