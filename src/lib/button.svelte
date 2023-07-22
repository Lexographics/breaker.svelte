<script>
  import { onMount } from "svelte";
  import "./global.css";

  export let href = "//:;";
  export let onclick = function (e) {};
  export let type = "primary";
  export let submit = false;
  export let value = "";
  export let transparent = false;

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
    class="type-{type} {transparentClass}"
    type="submit"
    {value}
    bind:this={element}
    on:click={_onClick}
    on:submit={_onClick}
  />
{:else}
  <div>
    <a
      class="type-{type} {transparentClass}"
      on:click={_onClick}
      bind:this={element}
      {href}
      draggable="false"
    >
      {value}
    </a>
  </div>
{/if}

{#if false}
  <span />
{/if}

<style>
  a,
  input {
    border: 0;
    width: min-content;
    position: relative;
    display: inline-block;
    padding: 4px 32px;
    margin: 14px 0;
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 0.4rem;
    user-select: none;
    overflow: hidden;

    background: var(--blue-1);
    background: linear-gradient(90deg, var(--blue-1) 0%, var(--blue-2) 100%);
  }

  .transparent {
    border: 1px solid var(--blue-2);
  }

  input:hover {
    cursor: pointer;
  }

  .type-warning {
    background: var(--yellow-1);
    background: linear-gradient(
      90deg,
      var(--yellow-1) 0%,
      var(--yellow-2) 100%
    );
  }
  .type-warning.transparent {
    border: 1px solid var(--yellow-2);
  }


  .type-error {
    background: var(--red-1);
    background: linear-gradient(90deg, var(--red-1) 0%, var(--red-2) 100%);
  }
  .type-error.transparent {
    border: 1px solid var(--red-2);
  }

  .type-success {
    background: var(--green-1);
    background: linear-gradient(90deg, var(--green-1) 0%, var(--green-2) 100%);
  }
  .type-success.transparent {
    border: 1px solid var(--green-2);
  }

  .transparent {
    background: transparent;
  }
</style>
