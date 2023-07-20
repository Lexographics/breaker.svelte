<script>
    import { browser } from "$app/environment";
import { Button, Switch } from "$lib/lib";
    
    function toggleDarkMode(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", 'dark')
            sessionStorage.setItem('theme-preference', 'dark');
        } else {
            document.documentElement.setAttribute("data-theme", 'light')
            sessionStorage.removeItem('theme-preference');
        }
    }

    let checked = false;
    if(browser) {
        checked = sessionStorage.getItem('theme-preference') === 'dark';
    }
</script>

<h1 style="text-align: center; text-transform: uppercase; margin: 2rem; color: #b020c9; font-size: 3rem; font-weight: 500;">
    breaker.svelte widgets
</h1>
<br>

<h1 style="text-align: center; text-transform: uppercase; margin: 2rem; color: #b020c9; font-size: 3rem; font-weight: 500;">
    buttons
</h1>

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center; flex-wrap: wrap;" id="buttons">
    <div style="padding: 1rem;"><Button type="primary" href="#">Primary</Button></div>
    <div style="padding: 1rem;"><Button type="warning" href="#">Warning</Button></div>
    <div style="padding: 1rem;"><Button type="error" href="#">Error</Button></div>
    <div style="padding: 1rem;"><Button type="success" href="#">Success</Button></div>
</div>

<br>
<h1 style="text-align: center; text-transform: uppercase; margin: 2rem; color: #b020c9; font-size: 3rem; font-weight: 500;">
    switch
</h1>
<div style="display: flex; justify-content: center;">
    <Switch checked={checked} onClicked={toggleDarkMode}>Dark Mode</Switch>
</div>