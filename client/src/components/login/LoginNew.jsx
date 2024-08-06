import style from "./Login2.module.css"
import { Link } from "react-router-dom"

export default function LoginNew() {
    return (
        <>
            <div className={style.whole}>
                <div className={style.body}>
                    <div className={style.wrapper}>
                        <div className={style.title}>
                            Login Form
                        </div>
                        <form action="#" className={style.lForm}>
                            <div className={style.field}>
                                <input type="text" required placeholder="Email Address" />
                            </div>
                            <div className={style.field}>
                                <input type="password" required placeholder="Password" />
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