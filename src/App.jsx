import { useState } from "react";
import "./App.css";

let vehicle = {
  id: Number,
  description: String,
  type: String,
  inspection: Number,
};

let inspection = {
  id: Number,
  name: String,
  allowedType: [],
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <h1>Quartix APP</h1>
      </main>
    </>
  );
}

export default App;
