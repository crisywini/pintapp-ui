function ItemCard({name, category, brand, photo}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{brand}</p>
            <img src={photo} alt="Logo"></img>
        </div>
    )
}

export default ItemCard