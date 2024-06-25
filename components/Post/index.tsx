import Head from "next/head";
import { Inter } from "next/font/google";
import { usePost } from "@/hooks/usePost";

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

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!post) {
    return <p>no posts found</p>;
  }

  return (
    <div>
       <Head>
        <title>{post?.title}</title>
      </Head>
      <h1 className="font-bold">{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div>Created by {user?.name}</div> : null}
    </div>
  );
}
