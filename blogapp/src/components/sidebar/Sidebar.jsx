import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(
        "https://amanapi.onrender.com/api/categories"
      );
      // console.log(res.data[0].name)
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT BLOG</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p className="para">
          The term "blog" is actually a shortened form of the phrase "weblog,"
          which was coined by Jorn Barger in 1997. Today, there are millions of
          blogs online covering a vast array of topics, and blogging has become
          a popular form of self-expression, communication, and marketing for
          individuals and businesses alike.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
