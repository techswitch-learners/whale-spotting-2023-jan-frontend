import { HashLink } from "react-router-hash-link";
import "./WhaleInfoSidebar.scss";

export const  WhaleInfoSidebar: React.FC = () => {
  return (
    <div className="info-side-bar">
        <ol className="info-side-bar-list">
          <li className="info-side-bar-item" id="side-bar-top">
            <HashLink className="side-link" to="/whale/about#top-of-page">Back to Top</HashLink>
          </li>
          <li className="info-side-bar-item">
            <HashLink className="side-link" to="/whale/about#whale-facts">Amazing Whale Facts</HashLink>
          </li>
        </ol>
    </div>
  );
}
