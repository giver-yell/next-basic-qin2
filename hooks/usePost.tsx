import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
}

export const usePost = () => {
  const router = useRouter();
  const { data: post, error: postError, isLoading: postIsLoading } = useSWR<Post>(
    router.query.id
    ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
    : null,
    fetcher
  );
  const { data: user, error: userError, isLoading: userIsLoading } = useSWR<User>(
    post?.userId
    ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
    : null,
  fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: postIsLoading || userIsLoading
  };
}

