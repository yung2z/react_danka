import styles from "./Input.module.css";
import SearchLogo from "../../icons/search.svg?react";

export default function Input({ ...props }) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...props} />
      <SearchLogo className={styles.icon}/>
    </div>
  );
}
