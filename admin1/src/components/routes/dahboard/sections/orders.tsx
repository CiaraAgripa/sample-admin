import React from "react";
import dynamic from "next/dynamic";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, ChartOptions } from "chart.js";
import {
  StyledChartCon,
  StyledMiniGraphContent,
  StyledMiniGraphIcon,
  StyledMiniGraphSubTitle,
  StyledMiniGraphTextWrapper,
  StyledMiniGraphTitle,
  StyledKPICon,
} from "../styled";
import { useTheme } from "styled-components";
import { PiBoxArrowUp } from "react-icons/pi";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), { ssr: false });

const Orders = () => {
  const theme = useTheme();

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sign Ups",
        data: [120, 90, 150, 130, 180, 160, 200],
        fill: true,
        backgroundColor: "rgba(121, 66, 238, 0.15)",
        borderColor: "#7942EE",
        borderWidth: 2.3,
        pointRadius: 0,
        pointHitRadius: 10,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: theme.card,
        titleColor: theme.title,
        bodyColor: theme.text,
        borderColor: theme.border,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
      },
    },
  };

  return (
    <StyledKPICon>
      <StyledMiniGraphContent>
        <StyledMiniGraphTextWrapper>
          <StyledMiniGraphSubTitle>Orders</StyledMiniGraphSubTitle>
          <StyledMiniGraphTitle>1,023</StyledMiniGraphTitle>
        </StyledMiniGraphTextWrapper>

        <StyledMiniGraphIcon>
          <PiBoxArrowUp />
        </StyledMiniGraphIcon>
      </StyledMiniGraphContent>
      <StyledChartCon>
        <Line data={data} options={options} />
      </StyledChartCon>
    </StyledKPICon>
  );
};

export default Orders;
