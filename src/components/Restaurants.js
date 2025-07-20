import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { RES_DETAILS_URL } from "../utils/constants";

const Restaurants = () => {
    const [resDetails, setResDetails] = useState(null)
    const [resName, setResName] = useState("")

    const {resId} = useParams()

    useEffect(() => {
        fetchResDetails();
    }, []);

    const fetchResDetails = async () => {
        const data = await fetch(RES_DETAILS_URL + resId);
        const json = await data.json();

        setResName(json?.data?.cards[0]?.card?.card?.text);
        console.log(json);
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setResDetails(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    if (resDetails === null) return <p>Loading...</p>
  return (
    <div>
        <h2>{resName}</h2>
        <p>Available items:</p>
        <ul>
            {
                resDetails.map(res => <li key={res.card.info.id}>{res.card.info.name}</li>)
            }
        </ul>
    </div>
  )
}

export default Restaurants