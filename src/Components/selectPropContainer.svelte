<script>
    export let flex_prop;
    export let showdoc;
    import SelectProp from "./selectProp.svelte";
    import Icon from "svelte-atoms/Icon.svelte";
</script>

<div class="container">
    <div class="title_prop">
        <div
            style="display:inline; cursor:pointer; background:white"
            on:click={() => showdoc(flex_prop.propname)}
        >
            <Icon
                status="blue"
                icon="question"
                size={8}
            />
        </div>
        {flex_prop.propname}:
    </div>
    <div class="sel_prop">
        <SelectProp {flex_prop} on:selprop />
    </div>
</div>

<style>
    .container {
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 0.75em;
        width: 230px;
        border: 1px solid rgb(216, 216, 216);
        margin-top: 3px;
        margin-bottom: 5px;
    }
    .title_prop {
        padding: 1px 0 0 5px;
        color: rgb(138, 88, 185);
        font-weight: 600;
    }
</style>
