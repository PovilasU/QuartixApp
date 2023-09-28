import { useContext } from "react";
import { MyStore } from "../App";

export default function Button({ val, vi, ii, type }) {
  const [data, setData] = useContext(MyStore);
  const name = type;

  function addRemoveInspection() {
    if (type === "add") {
      data.vehicles[vi].inspection.push(val);
    } else {
      data.vehicles[vi].inspection.splice(ii, 1);
    }

    setData({ ...data });
  }

  return (
    <>
      <button onClick={addRemoveInspection}>{name} </button>
    </>
  );
}
