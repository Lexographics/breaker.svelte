<script>
  export let height = "auto";
  export let radius = "0px";
  export let padding = "1rem";
</script>


<div class="container" style="height: {height}; border-radius: {radius}; padding: {padding};">
  <slot/>
</div>


<style>
  .container {

    transition: 0.2s;
    background-color: rgb(204, 204, 204);
  }

  :global([data-theme="dark"]) .container {
    background-color: rgb(12, 12, 12);
  }
</style>