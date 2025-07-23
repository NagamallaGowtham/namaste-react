import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({resData}) => {
    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } = resData?.info
  return (
    <div className="res-card max-w-[268px] rounded-lg bg-[#f0f0f0] p-5 h-full">
      <img src={CDN_URL + cloudinaryImageId} className="mb-3" style={{maxWidth: "100%", height: "auto"}} />
      <h3 className="font-medium">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export const withVegResCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative h-full">
        <label className="absolute bg-green-500 text-white p-2 rounded-sm">Veg</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard