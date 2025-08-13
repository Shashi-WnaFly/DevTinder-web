import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addConnections } from "../utils/connectionSlice";
import UserView from "./UserView";

const Connections = () => {
  const dispatch = useDispatch();
  const connects = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const connections = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      dispatch(addConnections(connections.data.data));
    } catch (error) {
      console.log("" + error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    connects && (
      <div className="w-1/2 mx-auto bg-base-300 rounded-md flex flex-col gap-4 ">
        <h1 className="text-center text-xl p-2 bg-base-100">Connections</h1>
        <div className="overflow-y-scroll scroll-smooth">
          {connects.map((row) => (
            <div className="flex h-[8rem] items-center justify-between px-4 py-2 bg-base-100 m-4 ">
              <UserView user={row} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Connections;
