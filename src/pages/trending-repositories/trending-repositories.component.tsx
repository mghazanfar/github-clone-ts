import { Progress } from "reactstrap";
import { Header } from "../../components/header-with-data-container";
import { RespositoryDetail } from "../../components/repository-detail";
import "./styles.css";

interface TrendingRepositoriesProps {
  repositories: any[];
  loading: boolean;
}

export const TrendingRepositories = ({
  repositories,
  loading,
}: TrendingRepositoriesProps) => {
  return (
    <Header>
      {loading ? (
        <Progress animated value={100} />
      ) : (
        repositories.map((repo) => <RespositoryDetail repo={repo} />)
      )}
    </Header>
  );
};
