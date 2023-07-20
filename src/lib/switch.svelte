<script>
  import { onMount } from "svelte";

  export let backgroundColor = "#512DA8";

  export let onClicked = function (e) {};
  export let checked = false;

  let element = null;
  onMount(() => {
    element.classList.remove('blur');
  });
</script>

<div bind:this={element} class="checkbox blur">
  <label class="switch" for="checkbox">
    <input {checked} type="checkbox" id="checkbox" on:click={onClicked} />
    <div style="--bg-color: {backgroundColor}" class="slider round" />
  </label>
  <p><slot /></p>
</div>

<style>
  .checkbox {
    display: flex;
    height: 30px;
    align-items: center;
  }

  .checkbox .switch {
    display: inline-block;
    height: 30px;
    position: relative;
    width: 70px;
    margin-right: 0.6rem;
  }

  .checkbox .switch input {
    display: none;
  }

  .checkbox .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .checkbox .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 22px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 22px;
  }

  .checkbox input:checked + .slider {
    background-color: var(--bg-color);
  }

  .checkbox input:checked + .slider:before {
    transform: translateX(40px);
  }

  .checkbox .slider.round {
    border-radius: 22px;
  }

  .checkbox .slider.round:before {
    border-radius: 50%;
  }

  .blur {
    filter: blur(5px);
  }
</style>
