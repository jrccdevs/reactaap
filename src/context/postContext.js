import { createContext, useContext, useState } from "react";
import {getProductosRequest} from '../api/posts'
import {getImagenesRequest} from '../api/posts'

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
 if (!context) throw new Error("Post Provider is missing");
  return context;
};

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const getProductos = async() => {
    const res =  await getProductosRequest();
      console.log(res)
    }


    const getImagenes = async() => {
      const res =  await getImagenesRequest();
        console.log(res)
      }
    return (
      <postContext.Provider
        value={{ 
            posts, 
            getProductos,
            getImagenes,
            setPosts
            
        }}>
        {children}
      </postContext.Provider>
    );
  };




   /* useEffect(() => {
      (async () => {
        const res = await getPostsRequest();
        setPosts(res.data);
      })();
    }, []);*/
  
  /*  const deletePost = async (id) => {
      const res = await deletePostRequest(id);
      if (res.status === 204) {
        setPosts(posts.filter((post) => post._id !== id));
      }
    };
  
    const createPost = async (post) => {
      try {
        const res = await createPostRequest(post);
        setPosts([...posts, res.data]);
      } catch (error) {
        console.error(error);
      }
    };
  
    const getPost = async (id) => {
      try {
        const res = await getPostRequest(id);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
  
    const updatePost = async (id, post) => {
      try {
        const res = await updatePostRequest(id, post);
        setPosts(posts.map((post) => (post._id === id ? res.data : post)));
      } catch (error) {
        console.error(error);
      }
    };*/
  