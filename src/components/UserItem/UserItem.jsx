import styles from "./UserItem.module.css";
import PhoneLogo from "../../icons/phone.svg?react";
import EmailLogo from "../../icons/email.svg?react";
import { useUserPopupStore } from "../../store/user-popup.store";

export default function UserItem({ user, ...props }) {
    const {setIsOpen} = useUserPopupStore();
    
  return (
    <div onClick={() => setIsOpen(true, user)} className={styles.item} {...props}>
      <div className={styles.item__header}>{user.name}</div>
      <div className={styles.item__body}>
        <div className={styles.item__body_element}>
            <PhoneLogo/>
            <span>{user.phone}</span>
        </div>
        <div className={styles.item__body_element}>
            <EmailLogo/>
            <span>{user.email}</span>
        </div>

      </div>
    </div>
  );
}
