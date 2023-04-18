const Category = ({ category, checkedCategories = false, setCheckedCategories }) => {
    const isChecked = checkedCategories.includes(category)

    const handleChecked = () => {
        if (isChecked) {
            setCheckedCategories([...checkedCategories.filter(eachCategory => eachCategory !== category)])
        } else {
            setCheckedCategories([...checkedCategories, category])
        }
    }

    return (
        <div>
            <input type="checkbox" className="checkBox" name={category} checked={isChecked} onChange={handleChecked}/>
            <label className="categoryLables" htmlFor={category}>{category}</label>
        </div>
    )
}

export default Category
