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
      <div>
        {connects.map((row) => (
          <div key={row._id}>
            <img src={row.photoUrl} alt="photo" />
          </div>
        ))}
      </div>
    )
  );
};

export default Connections;
