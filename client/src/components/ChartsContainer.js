import StatItem from "./StatItem";
import { useState } from "react";
import TheBarChart from "./BarChart";
import TheAreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>monthly applications</h4>

      <button
        type="button"
        onClick={() => {
          setBarChart(!barChart);
        }}
      >
        {barChart ? "AreaChart" : "BarChart"}
      </button>
      {barChart ? <TheBarChart data={data} /> : <TheAreaChart data={data} />}
      <StatItem />
    </Wrapper>
  );
};

export default ChartsContainer;
