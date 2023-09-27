import { useState, createContext } from "react";
import "./App.css";
import { vehiclesData } from "./data.js";
import { getAvailableInspections } from "./utilities.js";

const Context = createContext();

const createVehicle = (id, name, type, inspection) => {
  if (typeof name !== "string") {
    name = "Unknown";
  }
  let obj = {
    id,
    name,
    type,
    inspection,
  };

  return obj;
};

/*
  Is there already some data in localStorage?
    yes: use that data
    no: use data.js
*/

function App() {
  const [data, setData] = useState(vehiclesData);
  const { vehicles, inspections } = data;

  return (
    <Context.Provider value={[data, setData]}>
      <main className="container">
        <h1>Quartix APP</h1>
        <p>list of vehicles:</p>
        {data.vehicles.map((vehicle, idx) => {
          let availableInspections = getAvailableInspections(
            vehicle,
            inspections
          );

          console.log("availableInspections", availableInspections);
          return (
            <li key={idx}>
              id:{vehicle.id},|Description:{vehicle.description},|Type:
              {vehicle.type}|, | inspections:{vehicle.inspection},|
              availableInspections:{" "}
              {availableInspections.map((item) => {
                return <span key={item}>{item}|</span>;
              })}
              |,
            </li>
          );
        })}

        {/* <p>inspections</p> */}
        {/* {data.inspections.filter(inspection)} */}
      </main>
    </Context.Provider>
  );
}

export default App;
