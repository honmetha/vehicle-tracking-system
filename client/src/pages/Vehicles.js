import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavigationBar from "../components/NavigationBar";
import VehicleTable from "../components/VehicleTable";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      const result = await Axios.get("http://localhost:5000/vehicles");
      setVehicles(result.data);
    };

    fetchVehicles();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <NavigationBar />
      <div style={{ padding: "1rem" }}>
        <VehicleTable rows={vehicles} />
      </div>
    </div>
  );
};

export default Vehicles;
