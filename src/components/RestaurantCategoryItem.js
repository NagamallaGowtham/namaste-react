import { useState } from "react"
import { FOOD_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addCart } from "../utils/cartSlice"

const RestaurantCategoryItem = ({maintitle, items, categories = {}}) => {
    const [itemsVisible, setItemVisible] = useState(false)
    const {itemCards, title} = categories
    const dataToMap = items ?? itemCards

    const handleToggle = () => {
        setItemVisible(!itemsVisible);
    }

    const dispatch = useDispatch()

    const handleAddCart = (item) => {
        dispatch(addCart(item))
    }
  return (
    <>
        <div className="category border-b-2 border-gray-200">
            <button className="flex justify-between py-4 w-full cursor-pointer" onClick={handleToggle}>
                <span className="font-bold text-xl">{maintitle ? maintitle : title} ({dataToMap.length})</span>
                <span>⬇️</span>
            </button>
            {itemsVisible && ( <div className="category-items">
                {dataToMap?.map(item => (
                    <div className="items flex items-center gap-5 border-b-2 border-gray-200 pb-4 my-4 last:border-b-0" key={item?.card?.info?.id}>
                        <div className="w-10/12">
                            <h3 className="font-bold">{item?.card?.info?.name}</h3>
                            <p className="font-medium">{item?.card?.info?.price || item?.card?.info?.defaultPrice / 100} Rs</p>
                            <p>{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-2/12 relative">
                            <img src={FOOD_URL + item?.card?.info?.imageId} className="w-[156px] h-[144px]" />
                            <button className="bg-black text-white text-xl rounded-2xl absolute top-0 cursor-pointer p-2" onClick={() => handleAddCart(item)}>Add +</button>
                        </div>
                    </div>
                ))}
            </div> )}
        </div>
    </>
  )
}

export default RestaurantCategoryItem