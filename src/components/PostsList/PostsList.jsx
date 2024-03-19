import PostItem from "../PostItem/PostItem";
import styles from "./PostsList.module.css"
export default function PostsList({ posts, onDelete, ...props }) {
  return (
    <div className={styles.list} {...props}>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} onDelete={onDelete}/>
      ))}
    </div>
  );
}
