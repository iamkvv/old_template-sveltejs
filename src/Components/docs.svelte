<script>
    export let showprop;
</script>

<div>
    {#if showprop == "display"}
        <div class="doc-text">
            <code> display </code> <br/>
            Это свойство создаёт сам flex контейнер, инлайновый или блочный, 
            в зависимости от заданного значения. Также оно задает flex-контекст
             каждому прямому потомку. По умолчанию свойство <code>display</code>
             имеет значение <code>block</code> 
        </div>
        <figure style="margin:0">
            <figcaption>display: block - flex</figcaption>
            <img src="/images/disp_block_flex.gif" alt="block-flex" />
        </figure>
    {:else if showprop == "direction"}
        <p>DIRECTION</p>
    {/if}
</div>

<style>
    .doc-text {
        padding: 15px 10px 15px 10px;
        text-align: left;
        color: #5e9fd5;
        font-weight: 500;
        font-size: 0.75em;
    }
    .doc-text code {
        font-size: 1.3em;
        background-color: white;
    }
    figcaption {
        font-size: 0.75em;
        padding: 5px;
    }
    img {
        width: 246px;
    }
</style>
