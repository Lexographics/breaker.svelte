<script>
  import { onMount } from "svelte";
  import './global.css'

  export let href = "#";
  export let onclick = function() {}
  export let type = "primary";


  let element = null;
  onMount(async () => {
    element?.addEventListener("click", function (e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let span = document.createElement("span");
      span.classList.add("ripple");
      span.style.left = x + 'px';
      span.style.top = y + 'px';
      this.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, 500);
    });
  });
</script>

<a class="type-{type}" on:click={onclick} bind:this={element} {href} draggable="false">
  <slot />
</a>

{#if false}
  <span />
{/if}

<style>
  a {
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
    background: linear-gradient(
      90deg,
      var(--blue-1) 0%,
      var(--blue-2) 100%
    );
  }

  a.type-warning {
    background: var(--yellow-1);
    background: linear-gradient(
      90deg,
      var(--yellow-1) 0%,
      var(--yellow-2) 100%
    );
  }

  a.type-error {
    background: var(--red-1);
    background: linear-gradient(
      90deg,
      var(--red-1) 0%,
      var(--red-2) 100%
    );
  }

  a.type-success {
    background: var(--green-1);
    background: linear-gradient(
      90deg,
      var(--green-1) 0%,
      var(--green-2) 100%
    );
  }
</style>
