import { useNavigate } from "react-router-dom"
import { useCreateFlower } from "../../hooks/useFlowers"
import { useForm } from "../../hooks/useForm"
import style from "./CreateFlower.module.css"

const initialValues = {
    name: ``,
    img: ``,
    difficulty: ``,
    placement: ``,
}

export default function LoginNew() {
    const navigate = useNavigate();

    const createFlower = useCreateFlower();

    const createHandler = async (values) => {
        try {
            const { _id } = await createFlower(values);
            navigate(`/flowers/${_id}/description`)
        } catch (err) {
            console.log(err);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler);

    return (
        <>
            <div className={style.whole}>
                <div className={style.body}>
                    <div className={style.wrapper}>
                        <div className={style.title}>
                            Add your flower!
                        </div>
                        <form action="#" className={style.lForm} onSubmit={submitHandler}>
                            <div className={style.field}>
                                <input type="text" required name="name" value={values.name} onChange={changeHandler} placeholder="Name of the flower" />
                            </div>
                            <div className={style.field}>
                                <input type="text" required name="img" value={values.img} onChange={changeHandler} placeholder="Image Link" />
                            </div>

                            <label htmlFor="difficulty">Difficulty
                                <select name="difficulty" value={values.difficulty} onChange={changeHandler} id="difficulty">
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </label>
                            <label htmlFor="placement">Indoor/Outdoor
                                <select name="placement" value={values.placement} onChange={changeHandler} id="placement">
                                    <option value="indoor">Indoor</option>
                                    <option value="outdoor">Outdoor</option>
                                </select>
                            </label>

                            <div className={style.field}>
                                <input type="submit" value="Add Flower" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}