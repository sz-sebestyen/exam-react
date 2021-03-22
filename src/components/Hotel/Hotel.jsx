import { useState } from "react";
import Subscription from "..//Subscription/Subscription";

const Hotel = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h4>{props.hotel.name}</h4>
      {showMore && (
        <div>
          <p>stars: {props.hotel.stars}</p>
          <p>city: {props.hotel.city}</p>
          <button type="button" onClick={() => setShowForm(true)}>
            Request more info
          </button>
        </div>
      )}
      {showForm && (
        <Subscription hotel={props.hotel} setShowForm={setShowForm} />
      )}
      <button type="button" onClick={() => setShowMore((b) => !b)}>
        {showMore ? "Show less" : "show more"}
      </button>
    </div>
  );
};

export default Hotel;
