import Pet from "../components/Pet";

function PetList({ pets, setUpdate }) {
  return (
    <>
      <div>
        {pets.map((pet) => {
          return <Pet pet={pet} key={pet.id} setUpdate={setUpdate} />;
        })}
      </div>
    </>
  );
}

export default PetList;
