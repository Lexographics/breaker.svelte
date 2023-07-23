<script>
  import { onMount } from "svelte";
  import "./global.css";

  export let href = "//:;";
  export let onclick = function (e) {};

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

<a
  class="button"
  on:click={_onClick}
  bind:this={element}
  {href}
  draggable="false"
>
  <slot />
</a>

{#if false}
  <span />
{/if}

<style>
  .button {
    border: 0;
    width: fit-content;
    position: relative;
    display: block;
    padding: 4px 64px;
    text-decoration: none;
    font-size: 1.4rem;
    color: #fff;
    user-select: none;
    overflow: hidden;
    transition: 0.2s;
  }

  .button:hover {
    background-color: #00000010;
  }

  @media (max-width: 600px) {
    .button {
      width: 100%;
      text-align: center;
    }
  }
</style>
