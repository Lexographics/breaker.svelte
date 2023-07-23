<script>
  export let height = "auto";
  export let radius = "0px";
  export let padding = "1rem";
  export let backgroundColor = "auto";
</script>


<div class="container {backgroundColor === "auto" ? "bg-auto" : ""}" style="height: {height}; border-radius: {radius}; padding: {padding}; {backgroundColor === "auto" ? "" : "background-color:" + backgroundColor + ";"}">
  <slot/>
</div>


<style>
  .container {
    transition: 0.2s;
  }
  
  .container.bg-auto {
    background-color: rgb(204, 204, 204);
  }

  :global([data-theme="dark"]) .container.bg-auto {
    background-color: rgb(12, 12, 12);
  }
</style>