import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";

export const Header = ({ children }: any) => {
  const push = useNavigate();
  return (
    <div className="pt-5">
      <div className="text-center">
        <h1 className="text-white">Trending</h1>
        <p className="text-muted">
          See what the GitHub community is most excited about today
        </p>
        <div className="border data-container rounded mt-5">
          <div className="border child-container rounded">
            <div className="p-3 bg-secondary d-flex">
              <ButtonGroup>
                <Button color="primary" onClick={function noRefCheck() {}}>
                  Repositories
                </Button>
                <Button color="secondary" onClick={() => push("/developers")}>
                  Developers
                </Button>
              </ButtonGroup>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
