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

    let selectedDisplay, selectedDirection;
</script>

<div class="constr-container">
    <div class="field">123</div>
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
    </div>
</div>

<style>
    .constr-container {
        display: flex;
        flex-direction: row;
    }

    .field {
        width: 60%;
    }
    .props{
        display:flex;
        flex-direction: column;
    }
    .prop-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 220px;
        padding: 3px;
        background-color: whitesmoke;

        border: 1px solid silver;
    }
    .prop-name {
        width: auto;
    }

    select {
        padding: 0px;
        margin: 0px;
        min-width: 140px;
        background-color: blanchedalmond;
    }
    select option {
        background-color: blanchedalmond;

        margin: 0px;
    }
</style>
