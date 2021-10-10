<script>
    import SelectProp from "./Components/selectContainerProp.svelte";
    let flexProps = ["display", "direction", "wrap", "justify-content"];

    function setFlexStyle(event) {
        console.log("???", event, event.detail.prop, event.detail.id);
        switch (event.detail.prop) {
            case "display":
                selectedDisplay = event.detail.id;
                break;
            case "direction":
                selectedDirection = event.detail.id;
                break;
            case "wrap":
                selectedWrap = event.detail.id;
                break;
            case "justify-content":
                selectedJcont = event.detail.id;
                break;
            default:
                console.log("No such prop");
        }
    }
    //выбранные значения
    let selectedDisplay = "block";
    let selectedDirection = "row";
    let selectedJcont = "flex-start";
    let selectedWrap = "wrap";
</script>

{#each flexProps as prop}
    <SelectProp flex_prop={prop} on:selprop={setFlexStyle} />
{/each}

<!-- <SelectProp flex_prop="display" on:selprop={setFlexStyle} />
<br />
<SelectProp flex_prop="direction" on:selprop={setFlexStyle} />
<br />
<SelectProp flex_prop="wrap" on:selprop={setFlexStyle} />
<br />
<SelectProp flex_prop="justify-content" on:selprop={setFlexStyle} />
<br /> -->

<div class="constr-container">
    <div
        style="border:1px solid #ddd;
               min-width:300px;
               margin-right:10px;"
    >
        <!-- контейнер вложенных элементов -->
        <div
            class="field"
            style="--disp:{selectedDisplay};
                   --dir:{selectedDirection};
                   --jcont:{selectedJcont};
                   --wrap:{selectedWrap}"
        >
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
    </div>
</div>

<!-- <Flexlearn /> -->
<style>
    .constr-container {
        display: flex;
        flex-direction: row;
        width: max-content;
        margin: 20px auto;
        padding: 10px;
        border: 1px solid #eee;
    }
    .field {
        border: 3px solid yellow;
        height: 300px;
        margin: 3px;
        /* -flex-переменные- */
        display: var(--disp);
        flex-direction: var(--dir);
        justify-content: var(--jcont);
        flex-wrap: var(--wrap);
    }
    .item {
        width: 50px;
        margin-left: 1%;
        background-color: rgb(201, 222, 250);
    }
</style>
