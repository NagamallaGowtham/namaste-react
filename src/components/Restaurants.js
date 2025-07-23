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
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setResDetails(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    if (resDetails === null) return <p>Loading...</p>
  return (
    <div className="m-5 p-5 border-2 rounded-lg border-orange-300">
        <h2 className="font-bold text-4xl mb-7">{resName}</h2>
        <p className="mb-5">Available items:</p>
        <ul>
            {
                resDetails.map(res => <li key={res.card.info.id}>{res.card.info.name}</li>)
            }
        </ul>
    </div>
  )
}

export default Restaurants