import { useState, createContext, useEffect } from "react";
import "./App.css";
import { vehiclesData } from "./data.js";
import { getAvailableInspections, getValidInspection } from "./utilities.js";
import Button from "./Components/Button";
import Vehicle from "./Components/Vehicle";
import Inspection from "./Components/Inspection";

export const MyStore = createContext();

function App() {
  const [data, setData] = useState(vehiclesData);
  const { vehicles, inspections } = data;

  const [filteredVehicles, setFilteredVehicles] = useState(
    filterVehByType("car")
  );
  const [filteredInspections, setFilteredinspections] = useState(
    filterInspectionsByName("fluids")
  );
  const [filteredAllowedInspections, setFilteredAllowedInspections] = useState(
    filterInspectionsByAllowedTypes("lorry", inspections)
  );

  useEffect(() => {
    // console.log(data.vehicles[0]);
  }, [data]);

  const vehiclesList = data.vehicles.map((vehicle, vi) => {
    let availableInspections = getAvailableInspections(vehicle, inspections);

    return (
      <div className="vehicles" key={vi}>
        <h4>id: {vehicle.id}</h4>
        <h4>Description:{vehicle.description},</h4>
        <h4>
          Type:
          {vehicle.type}
        </h4>
        <h4>
          inspections:
          {vehicle.inspection.map((item, ii) => {
            return (
              <span key={ii} className="inspection">
                |{item}| {<Button val={item} vi={vi} ii={ii} type="remove" />}
              </span>
            );
          })}
        </h4>
        <h4>
          Available Inspections:
          {availableInspections.map((item, ii) => {
            return (
              <span key={item} className="inspection">
                |{item}|{<Button val={item} vi={vi} ii={ii} type="add" />}
              </span>
            );
          })}
        </h4>
      </div>
    );
  });

  function filterVehByType(vType) {
    return data.vehicles
      .filter((vehicle, i) => vehicle.type == vType)
      .map((vehicle, i) => {
        return <Vehicle key={i} vehicle={vehicle} />;
      });
  }
  function filterInspectionsByName(iName) {
    return data.inspections
      .filter((inspection, i) => inspection.name == iName)
      .map((inspection, i) => {
        return <Inspection key={i} inspection={inspection} />;
      });
  }
  function filterInspectionsByAllowedTypes(vehicle, inspections) {
    return inspections
      .filter((inspection) => {
        const { allowedType } = inspection;
        return allowedType === "any" || allowedType.includes(vehicle);
      })
      .map((inspection, i) => {
        return <Inspection key={i} inspection={inspection} />;
      });
  }

  return (
    <MyStore.Provider value={[data, setData]}>
      <main className="container">
        <div>
          {" "}
          <h1>Quartix APP</h1>
          <p>list of vehicles:</p>
          {vehiclesList}
        </div>

        <div>
          <label> Filtering vehicles by type:</label>
          <select
            name=""
            id=""
            onChange={(e) => {
              setFilteredVehicles(filterVehByType(e.currentTarget.value));
            }}
          >
            {vehicles.map((v, i) => {
              return (
                <option key={i} value={v.type}>
                  {v.type}
                </option>
              );
            })}
          </select>
          {filteredVehicles}
        </div>
        <div>
          <label> Filtering inspections by name:</label>
          <select
            name=""
            id=""
            onChange={(e) => {
              setFilteredinspections(
                filterInspectionsByName(e.currentTarget.value)
              );
            }}
          >
            {inspections.map((inspection, i) => {
              return (
                <option key={i} value={inspection.name}>
                  {inspection.name}
                </option>
              );
            })}
          </select>

          {filteredInspections}
        </div>
        <div>
          <label> Filtering inspections by Allowed type:</label>
          <select
            name=""
            id=""
            onChange={(e) => {
              setFilteredAllowedInspections(
                filterInspectionsByAllowedTypes(
                  e.currentTarget.value,
                  inspections
                )
              );
            }}
          >
            {vehicles.map((v, i) => {
              return (
                <option key={i} value={v.type}>
                  {v.type}
                </option>
              );
            })}
          </select>

          {filteredAllowedInspections}
        </div>
      </main>
      <br></br>
      <br></br>
      <br></br>{" "}
      <footer>
        <a href="https://github.com/PovilasU/QuartixApp">
          Git Repo of source code
        </a>
      </footer>
    </MyStore.Provider>
  );
}

export default App;
