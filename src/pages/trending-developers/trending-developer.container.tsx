import { useEffect, useState } from "react";
import { getTrendingDevelopers } from "../../api/callbacks";
import { RespositoryDetailProps } from "../../components/repository-detail";
import { TrendingDevelopers } from "./trending-developer.component";

export const TrendingDevelopersContainer = () => {
  const [loading, setLoading] = useState(false);
  const [developers, setDevelopers] = useState<RespositoryDetailProps[]>([]);

  useEffect(() => {
    setLoading(true);
    getTrendingDevelopers().then((res: RespositoryDetailProps[]) => {
      setLoading(false);
      setDevelopers(res);
    });
  }, []);

  return <TrendingDevelopers developers={developers} loading={loading} />;
};
