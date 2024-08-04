export default function FlowerListItem({
    _id,
    name,
    img,
}) {
    return (
        <>
                <figure className="effect-julia item">
                    <img src={img} alt="Image" />
                    <figcaption>
                        <div>
                            <p>{name}</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
        </>
    )
}