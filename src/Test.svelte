<script>
     import { createEventDispatcher } from "svelte";
     const dispatch = createEventDispatcher();
     export let text,test;
    function changeData() {
        dispatch("message", {
            text: test,
        });
    }
</script>

<div class="container">
    <div class="content">
        {text}
    </div>
    <div class="btn">
        <button on:click={changeData}> ADD LODASH </button>
    </div>
</div>

<style>
    .container {
        width: 400px;
        padding: 5px;
        background-color: whitesmoke;
        border: 1px solid silver;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .content {
        padding: 5px;
        width: 66%;
    }
    .btn {
        width: 34%;
    }
    .btn button {
        height: 40px;
        width: 100%;
    }
</style>
