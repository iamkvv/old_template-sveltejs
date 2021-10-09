<script>
    export let flex_prop = "";
</script>

<div class="combobox">
    <div class="title_prop">
        {flex_prop}:
    </div>
    <div class="sel_prop" >
        <select>

        </select>
    </div>
</div>

<style>
    .combobox {
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 0.75em;
        width: 120px;
        box-sizing: border-box;
        border: 1px solid gray;
    }
    .title_prop{
        padding:1px 0 0 5px;
    }
    .combobox select{
        
        margin:0 0 0 5px;
        padding:0;
    }
</style>
