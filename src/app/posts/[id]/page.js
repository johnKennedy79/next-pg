import { db } from "@/lib/db";

export default async function Post({ params }) {
  const post = (await db.query(`SELECT * FROM posts2 WHERE id = ${params.id};`))
    .rows;

  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
