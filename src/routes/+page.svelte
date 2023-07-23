<script>
    import { writable } from "svelte/store";
    import { browser } from "$app/environment";
    import { Button, NavButton, Switch, TextInput, CheckBox, Container, LoadingIndicator } from "$lib/lib";
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

    let users = [];
    let loading = false;
    async function makeRequest() {
        loading = true;
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        users = await response.json();
        loading = false;
    }
</script>

<Container height="auto" padding="0" backgroundColor="#3498DB">
    <div style="display: flex; flex-direction: row; flex-wrap: wrap; width: 100%; justify-content: center;">
        <NavButton href="./"> Home </NavButton>
        <NavButton href="./"> About </NavButton>
        <NavButton href="./"> Gallery </NavButton>
        <NavButton href="./"> Contact </NavButton>
    </div>
</Container>

<h1 class="header-text">breaker.svelte widgets</h1>
<br />

<h1 class="header-text">buttons</h1>

<div
    style="display: flex; flex-direction: row; align-items: center; justify-content: center; flex-wrap: wrap;"
    id="buttons"
>
    <div style="padding: 2rem;">
        <Button type="primary" value="Primary" />
        <br />
        <Button transparent type="primary" value="Primary" />
    </div>

    <div style="padding: 2rem;">
        <Button type="warning" value="Warning" />
        <br />
        <Button transparent type="warning" value="Warning" />
    </div>

    <div style="padding: 2rem;">
        <Button type="error" value="Error" />
        <br />
        <Button transparent type="error" value="Error" />
    </div>

    <div style="padding: 2rem;">
        <Button type="success" value="Success" />
        <br />
        <Button transparent type="success" value="Success" />
    </div>
</div>

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
                type="name">Username</TextInput
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

<h1 class="header-text">http</h1>

<div
    style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex-wrap: wrap; margin-bottom: 1rem;"
>
    <Button onclick={makeRequest} value="Make Request" />
</div>

<div style="padding: 0 10%;">
    {#if loading}
        <div style="display: flex; justify-content: center; margin: 2rem;">
            <LoadingIndicator/>
        </div>
    {:else}
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
            </tr>

            {#each users as user (user.id)}
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.company.name}</td>
                </tr>
            {/each}
        </table>
    {/if}
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

    table {
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>
