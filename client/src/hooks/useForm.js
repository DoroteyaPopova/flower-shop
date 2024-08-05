import { useState } from "react"

export function useForm(initialValues) {
    const [state, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);

        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        submitHandler,
    }
}