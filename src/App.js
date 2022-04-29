import "./App.css";
import { deleteUser, updateUserName } from './features/users/store'
import { useUsers } from "./features/users/hooks";
import { useAddUser } from "./features/users/actions";
import { useDispatch } from 'react-redux';

import { useState } from 'react'

function App() {

  const dispatch = useDispatch();
  //dispatch an action
  const users = useUsers();
  // const userList = useSelector((state) => state.users.value);
  const addUser = useAddUser();

  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder="Name.."
          onChange={(e) => { setName(e.target.value) }} />
        <input
          type="text"
          placeholder="Username.."
          onChange={(e) => { setuserName(e.target.value) }}
        />
        <button
          onClick={() => addUser(users.length + 1, name, userName)}
        >
          Add user
        </button>
      </div>
      <div className="displayUsers">
        {users.map((user) => {
          return (
            <div className="displayUsers">
              <h1 key={user.id}>{user.name}</h1>
              <h5>{user.username}</h5>
              <input type="text" placeholder="New username .."
                onChange={(e) => {
                  setNewUserName(e.target.value)
                }} />
              <button onClick={() => {
                dispatch(updateUserName({ id: user.id, username: newUserName }))
              }}>Update username</button>
              <button onClick={() => {
                dispatch(deleteUser({ id: user.id }))
              }}>Delete user</button>
            </div>
          )
        })}
      </div>
    </div >
  );
}

export default App;
