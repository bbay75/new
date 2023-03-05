import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.freewebheaders.com/wp-content/gallery/beautiful-landscape/amazing-house-on-lake-reflection-landscape-web-header.jpg"
        alt=""
      />
    </div>
  );
}
