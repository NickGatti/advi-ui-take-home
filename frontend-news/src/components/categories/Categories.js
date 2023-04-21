import Category from "./Category"

const Categories = ({categories, checkedCategories, setCheckedCategories}) => {
    const categoryCheckBoxes = categories.map((category, index) => {
        return <Category key={index} category={category} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories}/>
    })

    return (
        <fieldset className="categoriesFieldset">
            <legend className="categories">Categories:</legend>
            {categoryCheckBoxes}
        </fieldset>
    )
}

export default Categories
