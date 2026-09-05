import { useState } from "react";
import PostCard from "./PostCard";
import posts from "./posts.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog">
      <header className="blog-header">
        <h1>My React Blog</h1>
        <p>Welcome to Ankita's Blog</p>
      </header>

      <section className="controls">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </section>

      <main className="posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </main>
    </div>
  );
}

export default App;