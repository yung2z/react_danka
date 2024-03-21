import { useEffect, useState } from "react";
import getUsers from "../../api/user.api";
import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css"

export default function () {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className={styles.list}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
