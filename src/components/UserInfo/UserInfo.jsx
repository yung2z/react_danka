import { useUserPopupStore } from "../../store/user-popup.store";
import styles from "./UserInfo.module.css";

export default function UserInfo() {
  const { isOpen, setIsOpen, userInfo } = useUserPopupStore();

  if (!userInfo) {
    return <></>;
  }

  return (
    <div
      onClick={() => {
        setIsOpen(false, null);
      }}
      style={!isOpen ? { display: "none" } : { display: "block" }}
      className={styles.bg}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.popup}>
        {userInfo.name}
      </div>
    </div>
  );
}
