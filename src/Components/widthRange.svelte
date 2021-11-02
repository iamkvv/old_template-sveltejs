<script>
  import Tooltip from "svelte-atoms/Tooltip.svelte";
  export let widthDef;
  export let setItemWidth;
</script>

<div class='input-range-wrapper'>
  <label for="wdth" class="input-label">
    <code class="label-text"> Ширина элементов в % </code>

    <input
      bind:value={widthDef}
      on:change={(v) => setItemWidth(v)}
      id="wdth"
      name="wdth"
      type="range"
      min="0"
      max="100"
      step="1"
    />
  </label>
</div>

<style>
  .input-range-wrapper{
    width:100%;
    min-width:130px;
    box-sizing:border-box;
  }
  input[type="range"] {
    height: 0px;
    width: 100%;
    padding: 0px;
    border-top: 1px !important;
  }
  .input-label {
    min-width: 150px;
    margin-top: -16px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .label-text {
    white-space: nowrap;
    font-weight: 800;
    color: #2a7bbe;
  }
</style>
