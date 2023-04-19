import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [suk, setSuk] = useState();
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      // const data = new FormData();
      // const filename = Date.now() + file.name;
      // data.append("name", filename);
      // data.append("file", file);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "pj3tepnp");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxu7rwblb/image/upload",
        data
      );
      setSuk(JSON.stringify(res));
      console.log(res.data);
      // fetch("https://api.cloudinary.com/v1_1/dxu7rwblb/image/upload", {
      //   method: "post",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => {
      //     res.json();
      //   })
      //   .then((res) => {
      //     console.log("SUN RHA HU MAI" + res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      newPost.photo = res.data.secure_url;
      // try {
      //   await axios.post("https://amanapi.onrender.com/api/upload/", data);
      // } catch (err) {
      //   console.log(err);
      // }
    }
    try {
      const res = await axios.post(
        "https://amanapi.onrender.com/api/posts",
        newPost
      );
      WriteSuccessnotify();
      window.location.replace("/post/" + res.data._id);
      // window.location.replace("/");
    } catch (err) {
      WriteErrornotify();
    }
  };

  const WriteSuccessnotify = () => {
    toast.success("Post Created Successfully", {
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

  const WriteErrornotify = () => {
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
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt="post image"
        />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
