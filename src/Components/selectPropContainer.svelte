<script>
    export let flex_prop;
    import SelectProp from './selectProp.svelte'
</script>

<div class="container">
    <div class="title_prop">
        {flex_prop.propname}:
    </div>
    <div class="sel_prop" >
        <SelectProp flex_prop={flex_prop} on:selprop/>
    </div>
</div>

<style>
    .container {
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 0.75em;
        width: 210px;
        border: 1px solid rgb(193, 193, 194);
    }
    .title_prop{
        padding:1px 0 0 5px;
    }
</style>
