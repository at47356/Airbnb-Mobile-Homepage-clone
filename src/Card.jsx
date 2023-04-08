export default function Card(props) {
    return(
        <div className="card">
            <img src={`${props.img}`} className="card-image" />
            <div className="card--stats">
                <img src="./star.png" className="card-star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviews}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

// img="./katie-zaferes.png"
//         rating="5.0"
//         reviews="6"
//         location="USA"
//         title="Life Lessons with Katie Zaferes"
//         price="$136"