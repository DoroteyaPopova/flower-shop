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
                    <a href="#"></a>
                </figcaption>
            </figure>

            {/* <img src={img} alt={name} />
            <p>{name}</p>
            <a href="#">Info</a> */}
        </>
    )
}