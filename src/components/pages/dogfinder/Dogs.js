import whiskey from "../../../images/whiskey.jpg";
import hazel from "../../../images/hazel.jpg";
import tubby from "../../../images/tubby.jpg";
import { Link, NavLink } from "react-router-dom";

function Dogs({ dogs }) {
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
            <NavLink to={"/dogs/" + item.name}>
              <li>
                <div className=" w-[12rem] border-4 border-black rounded-full">
                  <img
                    className=" rounded-full border-2"
                    src={item.image}
                    alt=""
                  />
                </div>
                <p className="text-center mt-3">{item.name}</p>
              </li>
            </NavLink>
          );
        })}

        {/* <NavLink to="/dogs/whiskey">
          <li>
            <div className=" w-[12rem] border-4 border-black rounded-full">
              <img className=" rounded-full border-2" src={whiskey} alt="" />
            </div>
            <p className="text-center mt-3">Whiskey</p>
          </li>
        </NavLink>
        <NavLink to="/dogs/hazel">
          <li>
            <div className=" w-[12rem] border-4 border-black rounded-full">
              <img className=" rounded-full border-2" src={hazel} alt="" />
            </div>
            <p className="text-center mt-3">Hazel</p>
          </li>
        </NavLink>
        <NavLink to="/dogs/tubby">
          <li>
            <div className=" w-[12rem] border-4 border-black rounded-full">
              <img className=" rounded-full border-2" src={tubby} alt="" />
            </div>
            <p className="text-center mt-3">Tubby</p>
          </li>
        </NavLink> */}
      </ul>
    </div>
    // <div>
    //   {dogs.map((item, i) => {
    //     return (
    //       <Link key={i} to={`/dogs/${item.name}`}>
    //         <div>
    //           <p>{item.name}</p>
    //           <p>{item.facts[0]}</p>
    //         </div>
    //       </Link>
    //     );
    //   })}
    // </div>
  );
}

export default Dogs;
