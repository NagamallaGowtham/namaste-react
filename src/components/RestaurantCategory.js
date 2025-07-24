import RestaurantCategoryItem from "./RestaurantCategoryItem"

const RestaurantCategory = ({data}) => {
    const {title, itemCards, categories} = data?.card?.card
    return (
        <div className="max-w-8/12 mx-auto text-left border-b-8 border-gray-200 my-5">
            {categories && <h2 className="font-bold text-2xl">{title}</h2>}
            {categories ? categories.map(category => <RestaurantCategoryItem key={category.categoryId} categories={category} />) : <RestaurantCategoryItem maintitle={title} items={itemCards
            } />}
        </div>
    )
}

export default RestaurantCategory