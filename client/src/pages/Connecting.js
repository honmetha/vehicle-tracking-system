import React, { useState, useEffect } from "react";
import localStorage from "../utilities/localStorage";
import { useHistory } from "react-router-dom";
import Axios from "../utilities/Axios";

const Connecting = () => {
  const history = useHistory();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          Axios.post("http://localhost:5000/connecting", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
      }
    }, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeToken();
    history.push("/");
  };

  return (
    <div>
      <div>Connecting</div>
      <div>You are connected</div>
      <div>{`latitude: ${latitude} / longtitude: ${longitude}`}</div>
      <div>Please do not close the browser</div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Connecting;
