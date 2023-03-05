import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://cdn.visualwilderness.com/wp-content/uploads/2017/08/JAC_1143-web.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor iquid! Odio?
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="SinglePostAuther">
            Auther: <b>Safac</b>
          </span>
          <span className="SinglePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          repellat modi sed, quasi ut provident optio blanditiis nesciunt itaque
          eligendi, cum eaque! Repudiandae eveniet porro molestias eaque sunt
          ipsum eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda repellat modi sed, quasi ut provident optio blanditiis
          nesciunt itaque eligendi, cum eaque! Repudiandae eveniet porro
          molestias eaque sunt ipsum eius! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda repellat modi sed, quasi ut
          provident optio blanditiis nesciunt itaque eligendi, cum eaque!
          Repudiandae eveniet porro molestias eaque sunt ipsum eius!
        </p>
      </div>
    </div>
  );
}
