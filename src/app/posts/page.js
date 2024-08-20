import { db } from "@/lib/db";
import Link from "next/link";

export default async function PostsPage() {
  const posts = (await db.query(`SELECT * FROM posts2`)).rows;
  console.log(posts);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`posts/${post.id}`}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
