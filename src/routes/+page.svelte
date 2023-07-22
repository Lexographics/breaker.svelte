<script>
    import { writable } from "svelte/store";
    import { browser } from "$app/environment";
    import { Button, Switch, TextInput, CheckBox, Container } from "$lib/lib";
    import {
        notLessThan,
        notEmpty,
        notGreaterThan,
        doesntMatchRegex,
        isChecked,
    } from "$lib/forms/lib";

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

    let nameError = writable("");
    let passwordError = writable("");
    let checkboxError = writable("");

    function check(e) {
        let fields = {
            Name: {
                err: nameError,
                func: [
                    notEmpty,
                    doesntMatchRegex(
                        /^bobby fischer$/i,
                        "Name cannot be Bobby Fischer"
                    ),
                ],
            },
            Password: {
                err: passwordError,
                func: [notEmpty, notLessThan(8), notGreaterThan(10)],
            },
            Check: {
                err: checkboxError,
                func: [isChecked],
            },
        };

        let valid = true;

        for (let [name, data] of Object.entries(fields)) {
            let input = e.target.form.elements[name.toLowerCase()];
            if (!input) {
                data.err.set("Element not found");
                valid = false;

                continue;
            }

            for (let func of data.func) {
                let err = "";
                if (["text", "password", "tel", "email"].includes(input.type)) {
                    err = func(name, input.value);
                }
                if (["checkbox"].includes(input.type)) {
                    err = func(name, input.checked);
                }

                data.err.set(err);

                if (err !== "") {
                    valid = false;
                    break;
                }
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

<h1 class="header-text">breaker.svelte widgets</h1>
<br />

<h1 class="header-text">buttons</h1>

<Container>
    <div
        style="display: flex; flex-direction: row; align-items: center; justify-content: center; flex-wrap: wrap;"
        id="buttons"
    >
        <div style="padding: 1rem;">
            <Button type="primary" value="Primary" />
            <Button transparent type="primary" value="Primary" />
        </div>
        <div style="padding: 1rem;">
            <Button type="warning" value="Warning" />
            <Button transparent type="warning" value="Warning" />
        </div>
        <div style="padding: 1rem;">
            <Button type="error" value="Error" />
            <Button transparent type="error" value="Error" />
        </div>
        <div style="padding: 1rem;">
            <Button type="success" value="Success" />
            <Button transparent type="success" value="Success" />
        </div>
    </div>
</Container>

<br />
<h1 class="header-text">switch</h1>
<div style="display: flex; justify-content: center;">
    <Switch {checked} onClicked={toggleDarkMode}>Dark Mode</Switch>
</div>

<br />
<h1 class="header-text">forms</h1>

<div style="width: 50%; margin-left: 25%;">
    <Container radius="1rem">
        <form action="/breaker.svelte" method="get">
            <span id="error" />
            <TextInput
                errorText={$nameError}
                {onChange}
                name="name"
                placeholder="John Doe"
                type="tel">Username</TextInput
            >
            <TextInput
                errorText={$passwordError}
                {onChange}
                name="password"
                placeholder="********"
                type="password">Password</TextInput
            >

            <CheckBox
                errorText={$checkboxError}
                value="You must check this"
                name="check"
                id="check"
                {onChange}
            />

            <Button type="success" submit value="Submit" onclick={submit} />
        </form>
    </Container>
</div>

<br /><br />
<Container height="300px" />

<style>
    .header-text {
        text-align: center;
        text-transform: uppercase;
        margin: 2rem;
        color: #b020c9;
        font-size: 3rem;
        font-weight: 500;
    }
</style>
