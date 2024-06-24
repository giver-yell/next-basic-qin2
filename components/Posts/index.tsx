import { Inter } from "next/font/google";
import { useCallback, useEffect, useReducer } from "react";

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

type Action =
  | { type: "FETCHING" }
  | { type: "FETCHED"; payload: Post[] }
  | { type: "ERROR"; payload: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCHED":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error("An error occurred while fetching the data");
  }
}

export const Posts = () => {
  // const [state, setState] = useState<State>({
  //   data: [],
  //   loading: true,
  //   error: null,
  // });
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("An error occurred while fetching the data");
      }
      const json: Post[] = await res.json();
      dispatch({ type: "FETCHED", payload: json });
      // setState(prevState => {
      //   return {
      //     ...prevState,
      //     data: json,
      //     loading: false,
      //   }
      // });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: "ERROR", payload: err.message });
        // setState(prevState => {
        //   return {
        //     ...prevState,
        //     error: err.message,
        //   }
        // });
      } else {
        dispatch({ type: "ERROR", payload: "An error occurred while fetching the data" });
        // setState(prevState => {
        //   return {
        //     ...prevState,
        //     error: "An error occurred while fetching the data",
        //   }
        // });
      }
    }
  }, []);

  useEffect(() => {
    getPosts();
  }
  , [getPosts]);

  console.log("bar");

  if (state.loading) {
    return <p>loading...</p>;
  }

  if (state.error) {
    return <p>{state.error}</p>;
  }

  if (state.data.length === 0) {
    return <p>no posts found</p>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>
      })}
    </ol>
  );
}
