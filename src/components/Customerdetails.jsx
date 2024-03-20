import { useContext, useEffect, useState } from "react";
import { PostList } from "../store/store";
import Customer from "./Customer";
import Pagination from "./Pagination";

const Customerdetails = () => {
  const { postList } = useContext(PostList);

  const [currentpage, setCurrentpage] = useState(1);
  const [postsperpage] = useState(7);

  const indexofLastpost = currentpage * postsperpage;
  const indexofFirstpost = indexofLastpost - postsperpage;
  const currentPosts = postList.slice(indexofFirstpost, indexofLastpost);

  const paginate = (pagenumber) => setCurrentpage(pagenumber);

  return (
    <>
      {currentPosts.map((post) => (
        <Customer key={post.id} post={post} />
      ))}
      <Pagination
        postsperpage={postsperpage}
        totalposts={postList.length}
        paginate={paginate}
      />
    </>
  );
};
export default Customerdetails;
