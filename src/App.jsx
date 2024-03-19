import { useEffect, useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import getPosts from "./api/posts.api";
import getProgression from "./helpers/get-progression";

function App() {
  const [posts, setPosts] = useState([]);
  const [countPosts, setCountPosts] = useState(0);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(14);

  useEffect(() => {
    load(page, limit);
  }, [page, limit]);

  function onDelete(id) {
    const newArr = [...posts].filter((post) => id != post.id);
    setPosts(newArr);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newArr = [...posts];
    newArr.push({ id: Date.now(), title: text });
    setPosts(newArr.slice(0, limit));
  }

  async function load(pageNumber, countOnPage) {
    setIsLoading(true);
    const posts = await getPosts();
    setCountPosts(posts.length);
    setIsLoading(false);
    setPosts(
      posts.slice((pageNumber - 1) * countOnPage, pageNumber * countOnPage)
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button>Создать</Button>
      </form>

      <select
        onChange={(event) => setLimit(event.target.value)}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>

      <div className="container">
        {posts.length == 0 ? (
          <div>Посты не найдены</div>
        ) : (
          <PostsList posts={posts} onDelete={onDelete} />
        )}
      </div>

      <div className="paginator">
        {getProgression(Math.ceil(countPosts / limit)).map((el) => (
          <Button key={el} onClick={() => setPage(el)}>
            {el}
          </Button>
        ))}
      </div>
    </>
  );
}

export default App;
