import Button from "../Button/Button";
import styles from "./PostItem.module.css";

export default function PostItem({post, onDelete, ...props}) {
  return (
    <div className={styles.item} {...props}>
      <span>{post.title}</span>
      <Button onClick={()=>onDelete(post.id)}>X</Button>
    </div>)
}
