import {html} from '../../node_modules/lit-html/lit-html.js';
import * as utils from '../utils.js';
import * as userService from '../api/userService.js';


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
            <form @submit = ${onSubmit} id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`;

export async function  registerView(ctx){
    ctx.render(registerTemplate(utils.createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event){
    if(data.email == "" || data.password == ""){
        return alert("All fields must be filled!");
    } else if(data.password != data["confirm-password"]){
        return alert("The two passwords must be equal!");
    }
    await userService.register(data.email, data.password)
    .then(() =>{
        event.target.reset();
        ctx.page.redirect('/');
    });
}