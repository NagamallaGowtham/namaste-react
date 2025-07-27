import { useDispatch, useSelector } from "react-redux"
import { FOOD_URL } from "../utils/constants"
import { resetCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(resetCart())
    }
    return (
        <div className="my-8">
            <div className="flex justify-between">
                <h2 className="text-3xl text-center">Number of items added: <span className="font-bold">{cartItems.length}</span></h2>
                {cartItems.length > 0 && <button className="bg-black text-white text-xl rounded-2xl cursor-pointer p-2" onClick={handleClearCart}>Clear cart</button>}
            </div>
            {cartItems.map(item => (
                <div className="items flex items-center gap-5 border-b-2 border-gray-200 pb-4 my-4 last:border-b-0" key={item?.card?.info?.id}>
                    <div className="w-10/12">
                        <h3 className="font-bold">{item?.card?.info?.name}</h3>
                        <p className="font-medium">{item?.card?.info?.price || item?.card?.info?.defaultPrice / 100} Rs</p>
                        <p>{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-2/12 relative">
                        <img src={FOOD_URL + item?.card?.info?.imageId} className="w-[156px] h-[144px]" />
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Cart