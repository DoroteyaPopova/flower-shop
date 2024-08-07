import style from "./Register.module.css"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth"
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: ``, password: ``, rePassword: `` };

export default function RegisterNew() {
    const [error, setError] = useState(``);
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, rePassword }) => {
        if (password !== rePassword) {
            return setError(`Password missmatch!`);
        }

        try {
            await register(email, password);
            navigate(`/`);
        } catch (err) {
            setError(err.message);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

    return (
        <>
            <div className={style.whole}>
                <div className={style.body}>
                    <div className={style.wrapper}>
                        <div className={style.title}>
                            Register Form
                        </div>
                        <form onSubmit={submitHandler} className={style.lForm}>
                            <div className={style.field}>
                                <input
                                    type="email"
                                    required
                                    value={values.email}
                                    onChange={changeHandler}
                                    placeholder="Email Address" />
                            </div>
                            <div className={style.field}>
                                <input
                                    type="password"
                                    required
                                    value={values.password}
                                    onChange={changeHandler}
                                    placeholder="Password" />
                            </div>
                            <div className={style.field}>
                                <input
                                    type="password"
                                    required
                                    value={values.rePassword}
                                    onChange={changeHandler}
                                    placeholder="Confirm Password" />
                            </div>
                            <div className={style.field}>
                                <input type="submit" value="Register" />
                            </div>
                            <div className={style.signupLink}>
                                Already have an account? <Link to="/login">Login Now</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}