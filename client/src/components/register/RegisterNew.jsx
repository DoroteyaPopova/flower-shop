import style from "./Register.module.css"
import { Link } from "react-router-dom"

export default function RegisterNew() {
    return (
        <>
            <div className={style.whole}>
                <div className={style.body}>
                    <div className={style.wrapper}>
                        <div className={style.title}>
                            Register Form
                        </div>
                        <form action="#" className={style.lForm}>
                            <div className={style.field}>
                                <input type="text" required placeholder="Email Address" />
                            </div>
                            <div className={style.field}>
                                <input type="password" required placeholder="Password" />
                            </div>
                            <div className={style.field}>
                                <input type="password" required placeholder="Confirm Password" />
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