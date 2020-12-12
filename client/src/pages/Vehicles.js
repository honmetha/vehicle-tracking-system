import React from "react";
import NavigationBar from "../components/NavigationBar";
import VehicleTable from "../components/VehicleTable";

const Vehicles = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavigationBar />
      <div style={{ padding: "1rem" }}>
        <VehicleTable />
      </div>
    </div>
  );
};

export default Vehicles;
