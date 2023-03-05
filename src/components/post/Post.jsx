import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.visualwilderness.com/wp-content/uploads/2017/08/JAC_1143-web.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore esse
        nesciunt eligendi distinctio, perferendis id consequuntur facere iusto
        quod dignissimos impedit quia, ipsam nobis vero ab quo rem repellat
        odio!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
        esse nesciunt eligendi distinctio, perferendis id consequuntur facere
        iusto quod dignissimos impedit quia, ipsam nobis vero ab quo rem
        repellat odio!
      </p>
    </div>
  );
}
