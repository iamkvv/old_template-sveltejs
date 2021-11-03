<script>
    export let showprop;
</script>

<div>
    {#if showprop == "display"}
        <div class="doc-text">
            <code> display </code> <br/>
            Это свойство создаёт сам flex-контейнер, инлайновый или блочный, 
            в зависимости от заданного значения. Также оно задает flex-контекст
             каждому прямому потомку. По умолчанию свойство <code>display</code>
             имеет значение <code>block</code>.
        </div>
        <figure style="margin:0">
            <figcaption>display: block - flex</figcaption>
            <img src="/images/disp_block_flex.gif" alt="block-flex" />
        </figure>
    {:else if showprop == "direction"}
    <div class="doc-text">
        <code>direction</code> <br/>
        Устанавливает направление главной оси и определяет направление flex-элементов
         размещенных в контейнере. Flexbox - односторонняя концепция 
         представления шаблонизации. Поэтому flex-элементы располагаются вдоль горизонтальной или поперечной линии. 
         По умолчанию свойство <code>direction</code>
         имеет значение <code>row</code>.
    </div>
    <figure style="margin:0">
        <figcaption>direction: row - column</figcaption>
        <img src="/images/flex_row_col.gif" alt="row-column"/>
    </figure>

    {:else if showprop == "wrap"}
    <div class="doc-text">
        <code>flex-wrap</code> <br/>
        Устанавливает направление главной оси и определяет направление flex-элементов
         размещенных в контейнере. Flexbox - односторонняя концепция 
         представления шаблонизации. Поэтому flex-элементы располагаются вдоль горизонтальной или поперечной линии. 
         По умолчанию свойство <code>direction</code>
         имеет значение <code>row</code>.
    </div>
    <figure style="margin:0">
        <figcaption>direction: row - column</figcaption>
        <img src="/images/flex_row_col.gif" alt="row-column"/>
    </figure>


    {/if}
</div>

<style>
    .doc-text {
        padding: 15px 10px 15px 10px;
        text-align: left;
        color: #467aa5;
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
