import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList)
  const handleFilter = () => {
    const filteredList = listOfRes.filter(res => {
        return res.data.avgRating > 4
    })
    setListOfRes(filteredList);
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
            listOfRes.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))
        }
      </div>
    </div>
  )
}

export default Body