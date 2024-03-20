import { createContext, useEffect, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = [...currPostList];
  if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.users);
      });
  }, []);

  return <PostList.Provider value={{ postList }}>{children}</PostList.Provider>;
};

export default PostListProvider;
