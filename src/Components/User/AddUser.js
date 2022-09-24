import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="input"></input>

          <label htmlFor="age"> Age</label>
          <input id="age" type="number"></input>
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
