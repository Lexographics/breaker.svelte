<script>
  export let value = "Checkbox";
  export let name = "";
  export let id = "";
  export let checked = false;

  export let errorText = "";
  export let onChange = function(e) {
  }

  function _onChange(e) {
    onChange(e);
  }

  
</script>

<div class="checkbox">
  <label for="{id}">
    <input type="checkbox" {name} {id} {checked} on:change={_onChange}/>
    
    
    <span>{value}</span>
  </label>
  <div class="error">{errorText}</div>
</div>

<style>
  .error {
    color: red;
  }

  .checkbox {
    margin: 0.5rem 0;
  }

  label {
    color: #000;
    user-select: none;
  }

  :global([data-theme="dark"]) label {
    color: #fff;
  }
</style>