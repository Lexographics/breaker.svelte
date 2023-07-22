<script>
    import { writable } from 'svelte/store';
    import { browser } from "$app/environment";
    import { Button, Switch, TextInput } from "$lib/lib";

    function toggleDarkMode(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            sessionStorage.setItem("theme-preference", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            sessionStorage.removeItem("theme-preference");
        }
    }

    let checked = false;
    if (browser) {
        checked = sessionStorage.getItem("theme-preference") === "dark";
    }

    function checkName(name) {
        if(!name) {
            return "Name cannot be empty"
        }
        if(name.toLowerCase() === "bobby fischer") {
            return "Password cannot be Bobby Fischer"
        }

        return "";
    }
    function checkPassword(password) {
        if(!password) {
            return "Password cannot be empty"
        }

        if(password.length < 8) {
            return "Password must be greater than 8 characters"
        }

        return "";
    }

    let nameError = writable("");
    let passwordError = writable("");

    function check(e) {
        let fields = {
            name: {
                err: nameError,
                func: checkName
            },
            password: {
                err: passwordError,
                func: checkPassword
            }
        }

        let valid = true;

        for(let [name, data] of Object.entries(fields)) {
            let input = e.target.form.elements[name]
            if(!input) {
                data.err.set("Element not found");
                valid = false;

                continue;
            }
            
            let err = data.func(input.value);
            data.err.set(err);
            if(err !== "") {
                valid = false;

                continue;
            }

        }

        return valid;
    }

    function submit(e) {
        if (check(e)) {
            e.target.form.submit();
        }
    }

    function onChange(e) {
        check(e);
    }
</script>

<h1
    style="text-align: center; text-transform: uppercase; margin: 2rem; color: #b020c9; font-size: 3rem; font-weight: 500;"
>
    breaker.svelte widgets
</h1>
<br />

<h1
    style="text-align: center; text-transform: uppercase; margin: 2rem; color: #b020c9; font-size: 3rem; font-weight: 500;"
>
    buttons
</h1>

<div
    style="display: flex; flex-direction: row; align-items: center; justify-content: center; flex-wrap: wrap;"
    id="buttons"
>
    <div style="padding: 1rem;">
        <Button type="primary" value="Primary" />
    </div>
    <div style="padding: 1rem;">
        <Button type="warning" value="Warning" />
    </div>
    <div style="padding: 1rem;">
        <Button type="error" value="Error" />
    </div>
    <div style="padding: 1rem;">
        <Button type="success" value="Success" />
    </div>
</div>

<br />
<h1
    style="text-align: center; text-transform: uppercase; margin: 2rem; color: #b020c9; font-size: 3rem; font-weight: 500;"
>
    switch
</h1>
<div style="display: flex; justify-content: center;">
    <Switch {checked} onClicked={toggleDarkMode}>Dark Mode</Switch>
</div>

<br />
<h1
    style="text-align: center; text-transform: uppercase; margin: 2rem; color: #b020c9; font-size: 3rem; font-weight: 500;"
>
    text input
</h1>

<div style="width: 50%; margin-left: 25%;">
    <form action="/breaker.svelte" method="get">
        <span id="error" />
        <TextInput errorText={$nameError} onChange={onChange} name="name" placeholder="John Doe" type="tel"
            >Username</TextInput
        >
        <TextInput errorText={$passwordError} onChange={onChange} name="password" placeholder="********" type="password"
            >Password</TextInput
        >

        <Button type="success" submit value="Submit" onclick={submit} />
    </form>
</div>
