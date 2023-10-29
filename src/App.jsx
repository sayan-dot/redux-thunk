import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchUsers } from "./features/gituserslice";

function App() {
  const dispatch = useDispatch();
  const gitdata = useSelector((state) => state.app);

  const fetchdata = async () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      <button onClick={fetchdata}>random dad joke</button>
      {gitdata.users.map((user) => (
        <li key={user.id}>{user.login}</li> 
      ))}
    </>
  );
}

export default App;
