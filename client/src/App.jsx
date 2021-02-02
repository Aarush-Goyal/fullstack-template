import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("not set");
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => res.data)
      .then((res) => setName(res.name));
  });
  return (
    <div className="app">
      <p>{name}</p>
    </div>
  );
};

export default App;
