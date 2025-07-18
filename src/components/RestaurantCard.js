import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({resData}) => {
    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } = resData?.info
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img src={CDN_URL + cloudinaryImageId} style={{maxWidth: "100%", height: "auto"}} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard