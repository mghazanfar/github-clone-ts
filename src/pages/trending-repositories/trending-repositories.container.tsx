import { useEffect, useState } from "react";
import { getTrendingRepositories } from "../../api/callbacks";
import { RespositoryDetailProps } from "../../components/repository-detail";
import { TrendingRepositories } from "./trending-repositories.component";

export const TrendingRepositoriesContainer = () => {
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<RespositoryDetailProps[]>(
    []
  );

  useEffect(() => {
    setLoading(true);
    getTrendingRepositories().then((res: RespositoryDetailProps[]) => {
      setLoading(false);
      setRepositories(res);
    });
  }, []);

  return <TrendingRepositories repositories={repositories} loading={loading} />;
};
