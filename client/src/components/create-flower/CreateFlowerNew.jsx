import style from "./CreateFlower.module.css"

export default function LoginNew() {
    return (
        <>
            <div className={style.whole}>
                <div className={style.body}>
                    <div className={style.wrapper}>
                        <div className={style.title}>
                            Add your flower!
                        </div>
                        <form action="#" className={style.lForm}>
                            <div className={style.field}>
                                <input type="text" required placeholder="Name of the flower" />
                            </div>
                            <div className={style.field}>
                                <input type="text" required placeholder="Image Link" />
                            </div>

                            <label htmlFor="difficulty">Difficulty
                                <select name="difficulty" id="difficulty">
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </label>
                            <label htmlFor="placement">Indoor/Outdoor
                                <select name="placement" id="placement">
                                    <option value="indoor">Indoor</option>
                                    <option value="outdoor">Outdoor</option>
                                </select>
                            </label>

                            <div className={style.field}>
                                <input type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}