import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img className="postImg" src="https://render.fineartamerica.com/images/rendered/search/print/8/8/break/images/artworkimages/medium/1/watching-the-sun-christian-marcel.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}
