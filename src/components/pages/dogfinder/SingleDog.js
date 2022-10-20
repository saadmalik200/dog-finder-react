import { useParams, NavLink } from "react-router-dom";

function SingleDog({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter((item) => item.name === name)[0];
  const dog2 = dogs
    .map((item) => {
      if (item.name !== name) return item;
    })
    .filter((el) => el !== undefined)
    .map((it) => it.name);

  return (
    <>
      <div className="flex justify-center m-4">
        <h1 className="text-[1.5rem]">
          HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.
        </h1>
      </div>
      <ul className="flex justify-center gap-[5rem] mt-[3rem]">
        {dogs.map((item, i) => {
          return (
            <NavLink key={i} to={"/dogs/" + item.name}>
              <li>
                <div className=" w-[12rem] border-4 border-black rounded-full">
                  <img
                    className=" rounded-full border-2"
                    src={item.image}
                    alt=""
                    style={
                      dog2 && dog2.includes(item.name)
                        ? { opacity: "20%" }
                        : { opacity: "100%" }
                    }
                  />
                </div>
                <p className="text-center mt-3">
                  {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
                </p>
              </li>
            </NavLink>
          );
        })}
      </ul>

      <div className="flex justify-center">
        <div className="flex flex-col justify-center m-4 text-center">
          <h3 className="text-[2rem] text-purple-500">
            {dog && dog.name.toUpperCase()}
          </h3>
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
