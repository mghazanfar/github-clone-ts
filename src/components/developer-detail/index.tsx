import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { computer, heart, hot } from "../svgs";
import "./styles.css";

export interface DeveloperDetailProps {
  dev: {
    rank: number;
    avatar: string;
    name: string;
    username: string;
    url: string;
    popularRepository: any;
  };
}

export const DeveloperDetail = ({ dev }: DeveloperDetailProps) => {
  const { rank, avatar, name, username, popularRepository, url } = dev;
  debugger;
  return (
    <div className="p-3 border-bottom border-secondary">
      <div className="d-flex">
        <div className="text-secondary">{rank}</div>
        <div>
          <img src={avatar} className="ms-3 developer-avatar" alt={`${rank}`} />
        </div>
        <div className="flex-grow-1">
          <div className="username text-secondary">
            <Link to={url}>{name}</Link>
          </div>
          <div className="text-secondary">{username}</div>
        </div>

        <div className="flex-grow-1 d-flex flex-column align-items-center text-secondary">
          <div className="d-flex align-items-center">
            <div className="me-2">{hot}</div>
            <div>POPULAR REPO</div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex me-2">{computer}</div>
              <div className="d-flex">{popularRepository.repositoryName}</div>
            </div>
            <div className="d-flex">simple terminal UI for git commands</div>
          </div>
        </div>

        <div className="d-flex flex-grow-1 align-items-center justify-content-end">
          <Button outline className="d-flex align-items-center me-3">
            <div>{heart}</div>
            <div className="ms-2">Sponsor</div>
          </Button>

          <Button outline className="d-flex align-items-center">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};
