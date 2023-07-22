<script>
  export let height = "auto";
  export let radius = "0px";
</script>


<div class="container" style="height: {height}; border-radius: {radius};">
  <slot/>
</div>


<style>
  .container {
    padding: 1rem;

    transition: 0.2s;
    background-color: rgb(204, 204, 204);
  }

  :global([data-theme="dark"]) .container {
    background-color: rgb(12, 12, 12);
  }
</style>