import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://amanapi.onrender.com/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://amanapi.onrender.com/api/posts/" + path
      );
      setPost(res.data);

      console.log(res.data.photo);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`https://amanapi.onrender.com/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      DeleteSuccessnotify();
      window.location.replace("/");
    } catch (err) {
      DeleteErrornotify()
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://amanapi.onrender.com/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      UpdateSuccessnotify();
      setUpdateMode(false);
    } catch (err) {
      UpdateErrornotify()
    }
  };

  const DeleteSuccessnotify = () => {
    toast.success("Post Deleted Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const DeleteErrornotify = () => {
    toast.error("Something went wrong!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const  UpdateSuccessnotify = () => {
    toast.success("Post Updated Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const UpdateErrornotify = () => {
    toast.error("Something went wrong!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
