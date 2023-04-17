import Category from "./Category"

const Categories = ({categories}) => {
    const categoryCheckBoxes = categories.map((category, index) => {
        return <Category key={index} category={category}/>
    })

    return (
        <fieldset>
            <legend>Categories:</legend>
            {categoryCheckBoxes}
        </fieldset>
    )
}

export default Categories
