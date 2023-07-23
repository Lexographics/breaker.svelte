<script>
  import { onMount } from "svelte";
  import "./global.css";

  export let href = "//:;";
  export let onclick = function (e) {};
  export let type = "primary";
  export let submit = false;
  export let value = "";
  export let transparent = false;
  export let flat = false;
  export let noOutline = false;
  export let noShadow = false;

  let transparentClass = transparent ? "transparent" : "";

  function _onClick(e) {
    if (href === "//:;") {
      e.preventDefault();
    }

    onclick(e);
  }

  let element = null;
  onMount(async () => {
    element?.addEventListener("click", function (e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let span = document.createElement("span");
      span.classList.add("ripple");
      span.style.left = x + "px";
      span.style.top = y + "px";
      this.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, 500);
    });
  });
</script>

{#if submit}
  <input
    class="button type-{type} {transparentClass} {flat ? "flat" : ""} {noOutline ? "no-outline" : ""} {noShadow ? "" : "shadow"}"
    type="submit"
    {value}
    bind:this={element}
    on:click={_onClick}
    on:submit={_onClick}
  />
{:else}
    <a
      class="button type-{type} {transparentClass} {flat ? "flat" : ""} {noOutline ? "no-outline" : ""} {noShadow ? "" : "shadow"}"
      on:click={_onClick}
      bind:this={element}
      {href}
      draggable="false"
    >
      {value}
    </a>
{/if}

{#if false}
  <span />
{/if}

<style>
  .button {
    --color-1: var(--blue-1);
    --color-2: var(--blue-2);
  }
  .type-warning {
    --color-1: var(--yellow-1);
    --color-2: var(--yellow-2);
  }
  .type-error {
    --color-1: var(--red-1);
    --color-2: var(--red-2);
  }
  .type-success {
    --color-1: var(--green-1);
    --color-2: var(--green-2);
  }


  .button {
    border: 0;
    width: fit-content;
    position: relative;
    display: block;
    padding: 4px 32px;
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 0.4rem;
    user-select: none;
    overflow: hidden;
    transition: 0.2s;

    background: var(--color-1);
    background: linear-gradient(90deg, var(--color-1) 0%, var(--color-2) 100%);
  }

  .button.transparent {
    color: #000;
  }

  :global([data-theme="dark"]) .button.transparent {
    color: #fff;
  }

  .button.shadow:hover {
    cursor: pointer;
    box-shadow: var(--color-1) 0px 3px 10px 0px, var(--color-2) 0px 0px 0px 1px;
  }

  .transparent {
    background: transparent;
    border: 1px solid var(--color-2);
  }

  .flat {
    border-radius: 0;
  }

  .no-outline {
    border: 0;
  }
</style>
