import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(location);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://amanapi.onrender.com/api/posts/" + search);
      // console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
