import style from "./CreateFlower.module.css"

export default function CreateFlower() {
    return (
        <>
            <form id="form" action="/submit" method="post" data-scroll-index="3">
                <div className={style.container}>

                    <span className={style.spaan}>
                        <h1>Add your flower</h1>
                        <label>Name:</label>
                        <input type="text" id="name" name="name" placeholder="Red Rose..." />

                        <label>Difficulty:</label>
                        <input type="text" id="difficulty" name="difficulty" placeholder="Hard..." />

                        <label>Place</label>
                        <input type="text" id="place" name="place" placeholder="Indoor/Outdoor" />

                        <label>Description</label>
                        <input type="text" id="description" name="description" placeholder="Lovely red rose...." />
                    </span>
                </div>
            </form>

        </>
    )
}