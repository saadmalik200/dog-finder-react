import { NavLink } from "react-router-dom";

function Dogs({ dogs, imgArr }) {
  // const { name } = useParams();
  // console.log("Param is", name);
  console.log("img Arr", imgArr[0]);

  // useEffect(() => {}, [imgArr[0]]);

  return (
    <div>
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
                  />
                </div>
                <p className="text-center mt-3">
                  {" "}
                  {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
                </p>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Dogs;
