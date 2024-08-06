import style from "./CreateFlower.module.css"

export default function CreateFlower() {
    return (
        <>
            <form id="form" action="/submit" method="post" className={style.cform}>
                <div className={style.container}>

                    <span className={style.cspan}>
                        <h1 className={style.hMain}>Add your flower</h1>
                        <label className={style.clabel}>Name:</label>
                        <input className={style.cinput} type="text" id="name" name="name" placeholder="Red Rose..." />

                        <label className={style.clabel}>Difficulty:</label>
                        <input className={style.cinput} type="text" id="difficulty" name="difficulty" placeholder="Hard..." />

                        <label className={style.clabel}>Place</label>
                        <input className={style.cinput} type="text" id="place" name="place" placeholder="Indoor/Outdoor" />

                        <label className={style.clabel}>Description</label>
                        <input className={style.cinput} type="text" id="description" name="description" placeholder="Lovely red rose...." />
                    </span>
                </div>
            </form>

        </>
    )
}