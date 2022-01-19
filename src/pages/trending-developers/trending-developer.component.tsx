import { Progress } from "reactstrap";
import { DeveloperDetail } from "../../components/developer-detail";
import { Header } from "../../components/header-with-data-container";

interface TrendingRepositoriesProps {
  developers: any[];
  loading: boolean;
}

export const TrendingDevelopers = ({
  developers,
  loading,
}: TrendingRepositoriesProps) => {
  return (
    <Header active={2}>
      {loading ? (
        <Progress animated value={100} />
      ) : (
        developers.map((dev) => <DeveloperDetail dev={dev} />)
      )}
    </Header>
  );
};
