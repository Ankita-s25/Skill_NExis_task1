function PostCard({ post }) {
  return (
    <article className="post-card">
      <span className="category">{post.category}</span>

      <h2>{post.title}</h2>

      <p>{post.content}</p>

      <div className="post-info">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>
    </article>
  );
}

export default PostCard;
