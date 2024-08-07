import style from "./Login2.module.css"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm";


const initialValues = { email: "", password: "" }


export default function LoginNew() {
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
            <div className={style.whole}>
                <div className={style.body}>
                    <div className={style.wrapper}>
                        <div className={style.title}>
                            Login Form
                        </div>
                        <form onSubmit={submitHandler} className={style.lForm}>
                            <div className={style.field}>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className={style.field}>
                                <input
                                type="password"
                                required
                                name="password"
                                value={values.password}
                                onChange={changeHandler}
                                placeholder="Password" />
                            </div>
                            <div className={style.field}>
                                <input type="submit" value="Login" />
                            </div>
                            <div className={style.signupLink}>
                                Not a member? <Link to="/register">Register Now</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}