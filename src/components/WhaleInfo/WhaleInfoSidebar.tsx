import { HashLink } from "react-router-hash-link";
import "./WhaleInfoSidebar.scss";

export function WhaleInfoSidebar() {
  return (
    <div className="info-side-bar">
        <ol className="info-side-bar-list">
          <li className="info-side-bar-item" id="side-bar-top">
            <HashLink to="/whale/about#top-of-page">Back to Top</HashLink>
          </li>
          <li className="info-side-bar-item">
            <HashLink to="/whale/about#whale-facts">Amazing Whale Facts</HashLink>
          </li>
        </ol>
    </div>
  );
}
