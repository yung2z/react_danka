import { useEffect, useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import getPosts from "./api/posts.api";
import getProgression from "./helpers/get-progression";
import Select from "./components/Select/Select";

function App() {
  const [posts, setPosts] = useState([]);
  const [countPosts, setCountPosts] = useState(0);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isOpen, setIsOpen] = useState(false)

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
  function changeLimit(e) {
    setLimit(e);
  }

  if(!isOpen) {
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть</Button>
        <div className="calculator">
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item">5</div>
          <div className="item">6</div>
          <div className="item">7</div>
          <div className="item">8</div>
          <div className="item">9</div>
          <div className="item">0</div>

        </div>
      </>
    )
  }

  return (
    <>
      <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button>Создать</Button>
      </form>

      <Select changeLimit={changeLimit} values={["10", "20", "50"]}/>

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
