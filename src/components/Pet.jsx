import { useEffect, useState } from "react";
import Forms from "./Form";
import { deleteData } from "../services/delete";
function Pet({ pet, setUpdate }) {
  const [edit, setEdit] = useState(false);
  const { id, petsName, petOwner, appDate, appTime, aptNote } = pet;
  const deleteHandler = async (id) => {
    await deleteData(id);
    setUpdate((update) => update + 1);
  };

  useEffect(() => {}, [edit]);
  return (
    <>
      <div>
        <button onClick={() => deleteHandler(pet.id)}>X</button>
        <h2>{petsName}</h2>
        <p>Owner: {petOwner}</p>
        <p>{aptNote}</p>
        <p>{appDate}</p>
        <p>{appTime}</p>
        <button onClick={() => setEdit((prevState) => !prevState)}>
          edit
        </button>
      </div>
      {edit && <Forms pet={pet} setUpdate={setUpdate} />}
    </>
  );
}

export default Pet;
