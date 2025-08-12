import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addConnections } from "../utils/connectionSlice";

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
      <div className="w-1/2 mx-auto bg-base-300 rounded-md flex flex-col gap-4">
        {connects.map((row) => (
          <div key={row._id} className="flex gap-4 p-2">
            <div><img className="w-20 rounded-full" src={row.photoUrl} alt="photo" /></div>
            <div>
              <div>{row.firstName + " " + row.lastName}</div>
              <div>{row.about}</div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Connections;
