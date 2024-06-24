import { Inter } from "next/font/google";
import useSWR from "swr";

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

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
}

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
        return <li key={post.id}>{post.title}</li>
      })}
    </ol>
  );
}
