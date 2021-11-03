<script>
    export let showprop;
</script>

<div>
    {#if showprop == "display"}
        <div class="doc-text">
            <code> display </code> <br />
            Это свойство создаёт сам flex-контейнер, инлайновый или блочный, в зависимости
            от заданного значения. Также оно задает flex-контекст каждому прямому
            потомку. По умолчанию свойство <code>display</code>
            имеет значение <code>block</code>.
        </div>
        <figure style="margin:0">
            <figcaption>display: block - flex</figcaption>
            <img src="/images/disp_block_flex.gif" alt="block-flex" />
        </figure>
    {:else if showprop == "direction"}
        <div class="doc-text">
            <code>direction</code> <br />
            Устанавливает направление главной оси и определяет направление flex-элементов
            размещенных в контейнере. Flexbox - односторонняя концепция представления
            шаблонизации. Поэтому flex-элементы располагаются вдоль горизонтальной
            или поперечной линии. По умолчанию свойство <code>direction</code>
            имеет значение <code>row</code>.
        </div>
        <figure style="margin:0">
            <figcaption>direction: row - column</figcaption>
            <img src="/images/flex_row_col.gif" alt="row-column" />
        </figure>
    {:else if showprop == "wrap"}
        <div class="doc-text">
            <code>flex-wrap</code> <br />
            Изначально все flex-элементы пытаются уместиться в одну строку,
            но можно дать им возможность переходить на
            другую строку. <code>nowrap</code> — значение по умолчанию, при
            котором все flex-элементы будут выстраиваться в одну линию. При значении <code>wrap</code>
            элементы будут переноситься на несколько строк, от верха к низу. При значении <code>wrap-reverse</code>
            элементы будут переноситься на несколько строк снизу вверх.
        </div>
        <figure style="margin:0">
            <figcaption>flex-wrap: wrap</figcaption>
            <img src="/images/flex_wrap.jpeg" alt="row-column" />
        </figure>
        
        {:else if showprop == "justify-content"}
        <div class="doc-text">
            <code>justify-content</code> <br />
            Свойство определяет выравнивание вдоль главной оси. Оно помогает распределить 
            лишнее свободное пространство, когда, либо все flex-элементы в линии имеют
             фиксированный размер, либо же нет, но уже достигли своего максимального размера. 
             Оно также влияет на выравнивание элементов, когда те переполнят строку.

        </div>
        <figure style="margin:0">
            <figcaption>justify-content: start end center between around</figcaption>
            <img src="/images/justify_content.gif" alt="row-column" />
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
