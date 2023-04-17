const Category = ({ category, checked = false }) => {
    return (
        <div>
            <input type="checkbox" className="checkBox" name={category} checked={checked} />
            <label htmlFor={category}>{category}</label>
        </div>
    )
}

export default Category
