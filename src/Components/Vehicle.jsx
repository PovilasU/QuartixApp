export default function Vehicle({ vehicle }) {
  return (
    <li>
      <span>
        id: {vehicle.id}, description: {vehicle.type}, type: {vehicle.type},{" "}
        <span>inspections: {vehicle.inspection.join(", ")}</span>
      </span>
    </li>
  );
}
