<script>
  export let type = "input";
  export let name = "";
  export let id = "";
  export let placeholder = "";
  export let errorText = "";

  export let onChange = function(e) {
  }

  function _onChange(e) {
    onChange(e);
  }
</script>

<div class="text-input">
  <input {type} {placeholder} {name} id={id === "" ? name : id} on:input={_onChange} draggable="false" />
  <label draggable="false" for="name"><slot /></label>
  <div class="error"> {errorText} </div>
</div>

<style>
  .error {
    color: red;
  }

  .text-input {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
  }


  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #000;
    margin-bottom: 7px;
    margin-top: 10px;
    background-color: transparent;
    transition: 0.2s;
  }

  :global([data-theme="dark"]) input {
    color: #fff;
  }

  input::selection {
    background-color: #512da8;
  }


  input::placeholder {
    color: transparent;
    user-select: none;
  }

  input:focus::placeholder {
    color: #000;
    opacity: 0.5;
    font-weight: 300;
  }

  :global([data-theme="dark"]) input:focus::placeholder {
    color: #fff;
  }

  input:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #444444;
    user-select: none;
    pointer-events: none;
  }

  :global([data-theme="dark"]) label {
    color: #9b9b9b;
  }
 
  input:focus {
    font-weight: normal;
    border-image: linear-gradient(to right, #ba68c8, #512da8);
    border-image-slice: 1;
  }
  input:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #ba68c8;
    font-weight: normal;
  }
</style>
