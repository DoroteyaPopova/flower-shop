// import { useNavigate } from "react-router-dom";
// import { useRegister } from "../../hooks/useAuth"
// import { useState } from "react";

// const initialValues = { email: ``, password: ``, rePassword: `` };

// export default function Register() {
//     const [error, setError] = useState(``);
//     const register = useRegister();
//     const navigate = useNavigate();

//     const registerHandler = async ({ email, password, rePassword }) => {
//         if (password !== rePassword) {
//             return setError(`Password missmatch!`);
//         }

//         try {
//             await register(email, password);
//             navigate(`/`);
//         } catch (err) {
//             setError(err.message);
//         }
//     }

//     const {
//         values,
//         changeHandler,
//         submitHandler,
//     } = useForm(initialValues, registerHandler)

//     return (
//         <>
//             <section id="register-page" class="content auth" />
//             <form id="register" onSubmit={submitHandler} />
//             <div class="container">
//                 <div class="brand-logo"></div>
//                 <h1>Register</h1>

//                 <label for="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={values.email}
//                     onChange={changeHandler}
//                     name="email"
//                     placeholder="maria@email.com"
//                 />

//                 <label for="pass">Password:</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={values.password}
//                     onChange={changeHandler}
//                     id="register-password"
//                 />

//                 <label for="con-pass">Confirm Password:</label>
//                 <input
//                     type="password"
//                     name="rePassword"
//                     value={values.rePassword}
//                     onChange={changeHandler}
//                     id="confirm-password"
//                 />
//                 {error && (
//                     <p>
//                         <span>{error}</span>
//                     </p>
//                 )}

//                 <input class="btn submit" type="submit" value="Register" />

//                 <p class="field">
//                     <span>If you already have profile click <a href="/login">here</a></span>
//                 </p>
//             </div>
//         </>
//     )
// }

export default function Register() {
    return (
        <>
            <form id="form" action="/submit" method="post" data-scroll-index="3">
                <div>

                    <span >
                        <h1>Register</h1>

                        <label for="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value=""
                            onChange=""
                            name="email"
                            placeholder="maria@email.com"
                        />

                        <label for="pass">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value=""
                            onChange=""
                            id="register-password"
                        />

                        <label for="con-pass">Confirm Password:</label>
                        <input
                            type="password"
                            name="rePassword"
                            value=""
                            onChange=""
                            id="confirm-password"
                        />
                        {/* {error && ( */}
                            <p>
                                <span>{}</span>
                            </p>
                        {/* )} */}

                        <input className="btn submit" type="submit" value="Register" />

                        <p className="field">
                            <span>If you already have profile click <a href="/login">here</a></span>
                        </p>
                    </span>
                </div>
            </form>

        </>
    )
}