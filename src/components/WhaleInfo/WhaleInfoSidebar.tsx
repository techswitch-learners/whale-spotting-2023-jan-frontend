import { HashLink } from "react-router-hash-link";
import "./WhaleInfoSidebar.scss";

export const WhaleInfoSidebar: React.FC = () => {
  return (
    <div className="info-side-bar">
      <ol className="info-side-bar-list">
        <li className="info-side-bar-item" id="side-bar-top">
          <HashLink className = "sidebar-title" to="/whale/about#top-of-page">Back to Top</HashLink>
        </li>
       
        <li className="info-side-bar-item">
          <HashLink className = "sidebar-title" to="/whale/about#whale-facts">Amazing Whale Facts</HashLink>
          <br />
          <HashLink className = "sidebar-title" to="/whale/about#famous-whales">Famous Whales</HashLink>
          <br />
          <HashLink className = "sidebar-title" to="/whale/about#whale-conservation">Whale Conseravation</HashLink>
        </li>
      </ol>
    </div>
  );
}
