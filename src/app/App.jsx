import Input from "../components/Input/Input";
import UserInfo from "../components/UserInfo/UserInfo";
import UserList from "../components/UserList/UserList";
import { useUsersStore } from "../store/users.store";
import styles from "./App.module.css"
function App() {
  const {users, getAllUsers} = useUsersStore();


  return (
    <div className={styles.container}>
      <Input/>
      <UserList/>
      <UserInfo/>
    </div>
  );
}

export default App;
