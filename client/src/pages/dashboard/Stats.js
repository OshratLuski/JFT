import { useAppContext } from "../../context/appContext.js";
import Loading from "../../components/Loading";
import StatsContainer from "../../components/StatsContainer";
import ChartsContainer from "../../components/ChartsContainer";
import { useEffect } from "react";

const Stats = () => {
  const { isLoading, showStats, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
