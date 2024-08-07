import { Link } from 'react-router-dom'

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
                    <Link to={`/flowers/${_id}/description`}></Link>
                </figcaption>
            </figure>

            {/* <img src={img} alt={name} />
            <p>{name}</p>
            <a href="#">Info</a> */}
        </>
    )
}