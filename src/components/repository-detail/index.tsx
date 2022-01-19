import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { computer, link, star } from "../svgs";
import "./styles.css";

export interface RespositoryDetailProps {
  repo: {
    url: string;
    builtBy: {avatar:string}[];
    repositoryName: string;
    description: string;
    username: string;
    totalStars: number;
    forks: number;
    starsSince: number;
  };
}

export const RespositoryDetail = ({ repo }: RespositoryDetailProps) => {
  const { url, builtBy, repositoryName, description, username, totalStars, forks, starsSince } = repo;
  debugger
  return (
    <div className="p-3 border-bottom border-secondary">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center flex-grow-1">
          <div className="computer-icon d-flex">{computer}</div>
          <div className="ms-3">
            <Link
              className="font-weight-bold text-primary text-left repo-name"
              to={url}
            >
              {`${username}/${repositoryName}`}
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
          {description}
        </p>
      </div>
      <div className="d-flex align-items-center">
        {builtBy && (
          <div className="d-flex align-items-center">
            <div className="built-text text-muted me-2">Built by:</div>
            {builtBy.map(user=><img
              src={user.avatar}
              alt="..."
              className="rounded-circle avatar me-2"
            />)}
          </div>
        )}

        <div className="d-flex mx-5 text-muted align-items-center">
          <div className="computer-icon d-flex">{star}</div>
          <div className="built-text ms-2 text-muted">{totalStars}</div>
        </div>

        <div className="d-flex align-items-center">
          <div className="computer-icon d-flex">{link}</div>
          <div className="built-text ms-2 text-muted">{forks}</div>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <div className="computer-icon d-flex">{star}</div>
          <div className="built-text ms-2 text-muted">{starsSince} stars today</div>
        </div>
      </div>
    </div>
  );
};
