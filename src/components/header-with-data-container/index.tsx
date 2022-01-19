import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";

export const Header = ({ children, active }: any) => {
  const push = useNavigate();
  return (
    <div className="pt-5">
      <div className="text-center">
        <h1 className="text-white">Trending</h1>
        <p className="text-muted">
          See what the GitHub community is most excited about today
        </p>
        <div className="d-flex flex-column align-items-center">
          <div className="w-75">
            <div className="border border-secondary data-container mt-5 rounded">
              <div className="border-bottom border-secondary child-container ">
                <div className="p-3 bg-dark d-flex rounded">
                  <ButtonGroup>
                    <Button
                      color={active === 1 ? "primary" : "secondary"}
                      onClick={() => push("/repositories")}
                    >
                      Repositories
                    </Button>
                    <Button
                      color={active === 2 ? "primary" : "secondary"}
                      onClick={() => push("/developers")}
                    >
                      Developers
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
