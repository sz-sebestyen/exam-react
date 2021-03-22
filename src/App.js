import "./App.css";
import { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask/LoadingMask";
import Hotel from "./components/Hotel/Hotel";

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch("api/hotels");
    const data = await res.json();
    setHotels(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {loading && <LoadingMask />}
      <div>
        {hotels.map((hotel) => (
          <Hotel key={hotel.name} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default App;
