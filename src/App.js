import "./App.css";
import { deleteUser, updateUserName, addUser } from './features/users/store'
import { useUsers } from "./features/users/hooks";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
function App() {

  const dispatch = useDispatch();
  //dispatch an action
  const users = useUsers();
  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const newID = () => {
    return (users[users.length - 1].id) + 1
  }

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
        <button onClick={() => {
          // dispatch(addUser({ id: uuidv4(), name: name, userName: userName }))
          dispatch(addUser({ id: newID(), name: name, userName: userName }))
        }}>
          Add user
        </button>
      </div>
      <div className="displayUsers">
        {users.map((user) => {
          return (
            <div className="displayUsers" key={user.id}>
              <h1>{user?.name}</h1>
              <h5>{user?.userName}</h5>
              <p>{user?.id}</p>
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
