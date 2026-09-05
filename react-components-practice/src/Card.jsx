function Card({ title, description, technology }) {
    return (
        <div className="card">
            <h3>{title}</h3>

            <p>{description}</p>

            <span>{technology}</span>
        </div>
    );
}

export default Card;