import { RestaurantCard } from "./RestaurantCard";
import resList from "./../utils/mockData";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
export const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  let onTopResSearch = () => {
    const filtered = restaurantList.filter((res) => {
      return res.rating > 4.5;
    });
    setfilteredRestaurantList(filtered);
  };
  const onSearch = () => {
    console.log(restaurantList)
    const filteredRes = restaurantList.filter((res) => {
       return res.name.toLowerCase().includes(searchText);
    });
    console.log(filteredRes)
    setfilteredRestaurantList(filteredRes);
  };
  useEffect(()=>{
fetchData()
  },[])
  const fetchData = () =>{
   setrestaurantList(resList)
   setfilteredRestaurantList(resList)

  }

  return restaurantList.length == 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder=""
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value.toLowerCase());
            }}
          />
          <button onClick={onSearch}>Search</button>
        </div>
        <div>
          {" "}
          <button onClick={onTopResSearch}>Top rated restaurants</button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
