import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://render.fineartamerica.com/images/rendered/search/print/8/8/break/images/artworkimages/medium/1/watching-the-sun-christian-marcel.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Aman</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae
          blanditiis ut repellendus quis veritatis illum, porro delectus
          molestiae nobis nihil omnis facere quidem aut quibusdam pariatur
          tenetur minus possimus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas, beatae blanditiis ut repellendus quis
          veritatis illum, porro delectus molestiae nobis nihil omnis facere
          quidem aut quibusdam pariatur tenetur minus possimus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quas, beatae blanditiis
          ut repellendus quis veritatis illum, porro delectus molestiae nobis
          nihil omnis facere quidem aut quibusdam pariatur tenetur minus
          possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quas, beatae blanditiis ut repellendus quis veritatis illum, porro
          delectus molestiae nobis nihil omnis facere quidem aut quibusdam
          pariatur tenetur minus possimus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas, beatae blanditiis ut repellendus
          quis veritatis illum, porro delectus molestiae nobis nihil omnis
          facere quidem aut quibusdam pariatur tenetur minus possimus.
        </p>
      </div>
    </div>
  );
}
