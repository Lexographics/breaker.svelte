<script>
</script>

<div class="loader" />

<style>
  .loader {
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #160f6e;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
