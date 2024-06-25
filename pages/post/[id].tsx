import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Post } from "@/components/Post";

const inter = Inter({ subsets: ["latin"] });

const PostId = () => {
  return (
    <>
      <Header />
      <Post />
    </>
  );
}

export default PostId;
