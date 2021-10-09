<script>
    let display_vars = [
        { id: "flex", text: "flex" },
        { id: "inline-flex", text: "inline-flex" },
        { id: "block", text: "block" },
    ];

    let direction_vars = [
        { id: "row", text: "row" },
        { id: "row-reverse", text: "row-reverse" },
        { id: "column", text: "column" },
        { id: "column-reverse", text: "column-reverse" },
    ];
    let jcont_vars = [
        { id: "flex-start", text: "flex-start" },
        { id: "flex-end", text: "flex-end" },
        { id: "center", text: "center" },
        { id: "space-between", text: "space-between" },
        { id: "space-around", text: "space-around" },
    ];

    let selectedDisplay, selectedDirection, selectedJcont; //выбранные значения
</script>

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
    <!-- меню -->
    <div class="props">
        <div class="prop-container">
            <div class="prop-name">display</div>
            <select
                bind:value={selectedDisplay}
                on:blur={null}
                on:change={(e) => console.log("??", selectedDisplay)}
            >
                {#each display_vars as dispvar}
                    <option value={dispvar.id}>
                        {dispvar.text}
                    </option>
                {/each}
            </select>
        </div>

        <div class="prop-container">
            <div class="prop-name">direction</div>
            <select
                bind:value={selectedDirection}
                on:blur={null}
                on:change={(e) => console.log("??", selectedDirection)}
            >
                {#each direction_vars as dirvar}
                    <option value={dirvar.id}>
                        {dirvar.text}
                    </option>
                {/each}
            </select>
        </div>
        <div class="prop-container">
            <div class="prop-name">justify-content</div>
            <select
                bind:value={selectedJcont}
                on:blur={null}
                on:change={(e) => console.log("??", selectedJcont)}
            >
                {#each jcont_vars as jcontvar}
                    <option value={jcontvar.id}>
                        {jcontvar.text}
                    </option>
                {/each}
            </select>
        </div>
    </div>
</div>

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
    .props {
        display: flex;
        flex-direction: column;
        font-size: 0.75em;
    }
    .prop-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        min-width: 220px;
        padding: 3px;
        background-color: whitesmoke;

        border: 1px solid #ddd;
    }
    .prop-name {
        width: auto;
    }
    select {
        padding: 0px;
        margin: 0px;
        min-width: 120px;
        background-color: blanchedalmond;
    }
    select option {
        background-color: blanchedalmond;
        margin: 0px;
    }
</style>
