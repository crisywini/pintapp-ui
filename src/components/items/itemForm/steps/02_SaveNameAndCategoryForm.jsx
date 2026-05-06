

function SaveNameAndCategory({data, onChange}) {
    return (
        <div className="nameAndCategoryItemForm">
            <h2>Its time to name it and categorizing</h2>
            <input type="text" placeholder="Name" value={data.name}/>
            <input type="text" placeholder="Category" value={data.category}/>


        </div>
    )
}

export default SaveNameAndCategory