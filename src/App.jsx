import { useEffect, useState } from "react";
import { getAllData } from "./services/get";
import PetList from "./pages/PetList";
import PetReg from "./pages/PetReg";
import { Route, Routes } from "react-router-dom";

function App() {
  const [pets, setPets] = useState([]);
  const [update, setUpdate] = useState(0);
  const [error, setError] = useState("");
  const [showform, setShowForm] = useState(false);
  const [filter, setFilter] = useState({});

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setPets(data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [update]);
  return (
    <>
      <div className="Name">Paws & Patients Veterinary clinic</div>
      <div className="Form">
        {showform ? <PetReg setShowForm={setShowForm} /> : null}
      </div>

      <button onClick={() => setShowForm((showform) => !showform)}>
        Add Pet
      </button>
      <Routes>
        <Route
          path="/"
          element={<PetList pets={pets} setUpdate={setUpdate} />}
        />
      </Routes>
    </>
  );
}

export default App;
