<script>
    import Flexlearn from "./Flexlearn.svelte";
    import SelectProp from "./Components/selectContainerProp.svelte";

    function setFlexStyle(event) {
        console.log("???", event.detail.prop, event.detail.id);
        switch (event.detail.prop) {
            case "display":
                selectedDisplay = event.detail.id;
                break;
            case "direction":
                selectedDirection = event.detail.id;
                break;    
            case "justify-content":
                selectedJcont = event.detail.id;
                break;
            default:
                console.log("Not such Values");
        }
    }
    //выбранные значения
    let selectedDisplay = "block";
    let selectedDirection = "row"
    let selectedJcont = "flex-start"
</script>

<SelectProp flex_prop="display" on:selprop={setFlexStyle} />
<br />
<SelectProp flex_prop="direction" on:selprop={setFlexStyle} />
<br />
<SelectProp flex_prop="justify-content" on:selprop={setFlexStyle} />
<br />

<div class="constr-container">
    <!-- контейнер вложенных элементов -->
    <div
        style="border:1px solid #ddd;
               min-width:300px;
               margin-right:10px;"
    >
        <div
            class="field"
            style="--disp:{selectedDisplay};
                   --dir:{selectedDirection};
                   --jcont:{selectedJcont}"
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
        display: var(--disp);
        flex-direction: var(--dir);
        justify-content: var(--jcont);
    }
    .item {
        width: 50px;
        margin-left: 1%;
        background-color: rgb(201, 222, 250);
    }
</style>
