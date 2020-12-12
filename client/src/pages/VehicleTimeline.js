import React from "react";
import { useHistory } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import VehicleTable from "../components/VehicleTable";

const VehicleTimeline = () => {
  const history = useHistory();
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavigationBar text={`Vehicle ID: 000000000000`} />
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <ArrowBackIcon
            style={{ paddingRight: "0.5rem", cursor: "pointer" }}
            onClick={() => history.push("/vehicles")}
          />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/vehicles")}
          >
            BACK
          </span>
        </div>
        <VehicleTable />
      </div>
    </div>
  );
};

export default VehicleTimeline;
