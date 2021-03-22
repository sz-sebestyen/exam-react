import { useState } from "react";
import LoadingMask from "..//LoadingMask/LoadingMask";

const Subscription = (props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  return (
    <div>
      <h4>Request more info about</h4>
      {loading && !message && <LoadingMask />}
      {message}
      {!loading && !message && (
        <div>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <button
            type="buton"
            disabled={!/[@.]/.test(email)}
            onClick={() => {
              setLoading(true);
              fetch("api/hotels/subscribe", {
                method: "post",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, hotel: props.hotel.name }),
              })
                .then((res) => res.json())
                .then((msg) => {
                  console.log(msg);
                  if (msg.success) {
                    setMessage("Subscribed");
                  } else if (
                    props.hotel.name === "Hotel Curabitur suscipit suscipit"
                  ) {
                    setMessage("Already subscribed");
                  }
                  setTimeout(() => {
                    props.setShowForm(false);
                  }, 5000);
                });
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Subscription;
