import styles from "./AddUser.module.css";
const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="input"></input>

      <label htmlFor="age"> Age</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
