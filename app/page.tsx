import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className="porse dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h1 className="font-semibold text-2xl pb-3">{post.title}</h1>
            </Link>
            {post.description && <p className="pb-5">{post.description}</p>}
          </article>
        ))}
      </div>
    </main>
  );
}
