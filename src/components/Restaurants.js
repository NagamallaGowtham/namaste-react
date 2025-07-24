import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { RES_DETAILS_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const Restaurants = () => {
    const [resDetails, setResDetails] = useState(null)

    const {resId} = useParams()

    useEffect(() => {
        fetchResDetails();
    }, []);

    const fetchResDetails = async () => {
        const data = await fetch(RES_DETAILS_URL + resId);
        const json = await data.json();

        console.log(json);
        setResDetails(json);
        // setResName(json?.data?.cards[0]?.card?.card?.text);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // setResDetails(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    if (resDetails === null) return <p>Loading...</p>

    const resName = resDetails?.data?.cards.filter(name => name?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
    const resInfo = resName[0]?.card?.card?.info
    
    const categories = resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => {
        const type = category?.card?.card?.["@type"];
        return type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    })
    console.log(categories)

  return (
    <div className="text-center mt-6">
        <h2 className="font-bold text-4xl mb-7">{resInfo.name}</h2>
        <p className="mb-5"><span className="font-semibold">Cuisines:</span> {resInfo.cuisines.join(", ")}</p>
        {categories.map(category => <RestaurantCategory key={category?.card?.card?.categoryId} data={category} />)}
    </div>
  )
}

export default Restaurants