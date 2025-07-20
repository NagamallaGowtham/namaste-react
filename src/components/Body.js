import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Body = () => {
  const [listOfRes, setListOfRes] = useState([])
  const [searchText, setSearchText] = useState("")
  const [searchList, setSearchList] = useState([])
  const handleFilter = () => {
    const filteredList = listOfRes.filter(res => {
        return res.info.avgRating > 4
    })
    setListOfRes(filteredList);
  }
  const handleSearch = () => {
    const filteredSearchList = listOfRes.filter(res => {
        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setSearchList(filteredSearchList)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9190519&lng=80.2300343&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    // Optional Chaining
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setSearchList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)  => setSearchText(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
            searchList.map((restaurant) => (
                <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}><RestaurantCard  resData={restaurant} /></Link>
            ))
        }
      </div>
    </div>
  )
}

export default Body