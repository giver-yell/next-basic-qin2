import { Inter } from "next/font/google";
import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "@/utils/fetcher";

const inter = Inter({ subsets: ["latin"] });


interface Post {
  id: number;
  title: string;
  body: string;
}

interface State {
  data: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: true,
  error: null,
};

export const Posts = () => {
  const { data, error, isLoading } = useSWR<Post[]>("https://jsonplaceholder.typicode.com/posts", fetcher);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>no posts found</p>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        )
      })}
    </ol>
  );
}
