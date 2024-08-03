import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm";

const initialValues = { email: ``, password: `` }

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    
    const loginHandler =
        async ({ email, password }) => {
            try {
                await login(email, password)
                navigate(`/`);
            } catch (err) {
                console.log(err.message);
            }
        }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler);

    return (
        <>
            <section id="login-page" class="auth" />
            <form id="login" />

            <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                <label for="login-pass">Password:</label>
                <input type="password" id="login-password" name="password" />
                <input type="submit" class="btn submit" value="Login" />
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </div>
        </>
    )
}