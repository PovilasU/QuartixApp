export default function Inspection({ inspection }) {
  return (
    <li>
      <span>
        id: {inspection.id}, name: {inspection.name},{" "}
        <span> allowed type: {inspection.allowedType.join(", ")}</span>
      </span>
    </li>
  );
}
