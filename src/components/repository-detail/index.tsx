import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { computer, link, star } from "../svgs";
import "./styles.css";

let dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra enim id mi aliquet consequat ac nec enim. Praesent ut laoreet turpis. Curabitur tempus nec lorem quis mollis. Suspendisse lacus purus, lacinia at nibh id, dignissim vulputate lorem. Duis et lobortis dolor, at fermentum ipsum. Curabitur iaculis sagittis metus sit amet maximus. Nunc at tempus velit. Fusce pretium justo eget ullamcorper ultricies. Sed id fringilla sem. Quisque non dui at nulla maximus convallis. Praesent ullamcorper cursus lobortis. Vestibulum in metus ex. In vel vulputate purus. Ut id metus non augue";

export interface RespositoryDetailProps {
  repo: {
    repourl: string;
    avatar: string;
    reponame: string;
    description: string;
    author: string;
  };
}

export const RespositoryDetail = ({ repo }: RespositoryDetailProps) => {
  const { repourl, avatar, reponame, description, author } = repo;
  return (
    <div className="p-3 border-bottom">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center flex-grow-1">
          <div className="computer-icon d-flex">{computer}</div>
          <div className="ms-3">
            <Link
              className="font-weight-bold text-primary text-left repo-name"
              to={repourl}
            >
              {`${author}/${reponame}`}
            </Link>
          </div>
        </div>
        <div className="d-flex text-white text-end">
          <div>
          <Button outline className="d-flex align-items-center">
            <div>{star}</div>
            <div className="ms-2">Star</div>
          </Button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-muted w-75 text-start description">
          {description || dummyText}
        </p>
      </div>
      <div className="d-flex align-items-center">
        {avatar && (
          <div className="d-flex align-items-center">
            <div className="built-text text-muted">Built by:</div>
            <img
              src={avatar}
              alt="..."
              className="rounded-circle avatar ms-2"
            />
          </div>
        )}

        <div className="d-flex mx-5 text-muted align-items-center">
          <div className="computer-icon d-flex">{star}</div>
          <div className="built-text ms-2 text-muted">2,104</div>
        </div>

        <div className="d-flex align-items-center">
          <div className="computer-icon d-flex">{link}</div>
          <div className="built-text ms-2 text-muted">288</div>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <div className="computer-icon d-flex">{star}</div>
          <div className="built-text ms-2 text-muted">288 stars today</div>
        </div>
      </div>
    </div>
  );
};
