import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const PostId = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      <div>{router.query.id}</div>
    </>
  );
}

export default PostId;
