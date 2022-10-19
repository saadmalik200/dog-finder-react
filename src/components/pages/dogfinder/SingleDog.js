import { useParams } from "react-router-dom";

function SingleDog({ dogs }) {
  const { name } = useParams();
  console.log(dogs);
  console.log(name);
  const dog = dogs.filter((item) => item.name === name)[0];
  console.log(dog[0]);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center m-4 text-center">
          <h3 className="text-[2rem]">{dog && dog.name}</h3>
          <h5 className="text-[2rem]">{dog && dog.age}</h5>
          <p className="text-[1.5rem]">{dog && dog.facts[0]}</p>
          <p className="text-[1.5rem]">{dog && dog.facts[1]}</p>
          <p className="text-[1.5rem]">{dog && dog.facts[2]}</p>
        </div>
      </div>
    </>
  );
}

export default SingleDog;
