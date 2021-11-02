<script>
  import Tooltip from "svelte-atoms/Tooltip.svelte";
  export let widthDef;
  export let setItemWidth;
</script>

<div style="width:100%;min-width:130px;box-sizing:border-box;">
  <label for="wdth" style="min-width:150px;margin-top:-16px;padding-left:10px;padding-right:10px;box-sizing:border-box;">
    <code style="white-space: nowrap;"> Ширина элементов в %</code>

    <input
      bind:value={widthDef}
      on:change={(v) => setItemWidth(v)}
      id="wdth"
      name="wdth"
      type="range"
      list="marks"
      min="0"
      max="100"
      step="1"
    />
  </label>
  <!-- <datalist id="marks" class="marks">
    <option value="0" label="0%"/>
    <option value="10" />
    <option value="20" />
    <option value="30" />
    <option value="40" />
    <option value="50" label="50%" />
    <option value="60" />
    <option value="70" />
    <option value="80" />
    <option value="90" />
    <option value="100" label="100%" />
  </datalist> -->
</div>

<style>
  /* .marks {
    display: flex;
    width: 90%;
    justify-content: space-between;
  } */

  input[type="range"] {
    height: 0px;
    width:100%;
    padding:0;
  }

  /* .marks option {
    width: 0;
  } */
</style>
