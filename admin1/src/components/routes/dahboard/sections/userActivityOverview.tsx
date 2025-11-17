import React, { useState } from "react";
import { StyledChartViewBtn, StyledChartViewBtnCon, StyledGraphCon, StyledRevenueChartCon, StyledRevenueHeader } from "../styled";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ChartDataset, ChartOptions } from "chart.js";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Chart = dynamic(() => import("react-chartjs-2").then((mod) => mod.Chart), { ssr: false });

const UserActivityOverview = () => {
  const theme = useTheme();
  const [activeRange, setActiveRange] = useState("1W");
  const ranges = ["1W", "1M", "6M", "1Y"];

  const data: {
    labels: string[];
    datasets: ChartDataset<"bar" | "line", number[]>[];
  } = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: "line",
        label: "Past Visitors",
        data: [1200, 1500, 1100, 1800, 2000, 1750, 2200],
        borderColor: "#1BB1F8",
        backgroundColor:"#1BB1F8",
        yAxisID: "ySignUps",
        pointRadius: 0,
        tension: 0.3,
        borderWidth: 2,
      },
      {
        type: "line",
        label: "New Signups",
        data: [200, 350, 180, 400, 500, 300, 450],
        borderColor: "#7e67ff",
        borderDash: [8, 4],
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "rgba(126, 103, 255, 0.3)");
          gradient.addColorStop(0.7, "rgba(126, 103, 255, .05)");
          gradient.addColorStop(1, "rgba(126, 103, 255, 0)");
          return gradient;
        },
        borderWidth: 1.8,
        tension: 0.3,
        yAxisID: "yVisitors",
        pointRadius: 0,
        fill: true,
      } as ChartDataset<"line", number[]>,
    ],
  };

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: theme.text4,
          font: {
            family: '"NexonFootballGothic", sans-serif',
            size: 12,
          },
          usePointStyle: true,
          pointStyle: "circle",
          boxHeight: 5,
          boxWidth: 5,
          padding: 25,
        },
      },
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
      ySignUps: {
        type: "linear" as const,
        position: "right" as const,
        display: false,
      },
      yVisitors: {
        type: "linear" as const,
        position: "left" as const,
        ticks: {
          color: theme.text4,
          font: {
            family: '"NexonFootballGothic", sans-serif',
            weight: "bold",
          },
        },
        grid: {
          color: theme.borderOpacity,
          drawOnChartArea: true,
        },
        border: {
          display: false,
          dash: [5, 5],
        },
      },
      x: {
        grid: {
          drawTicks: false,
          drawOnChartArea: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: theme.text4,
          font: {
            family: '"NexonFootballGothic", sans-serif',
            weight: "bold",
          },
          padding: 10,
        },
      },
    },
  };

  return (
    <StyledGraphCon>
      <StyledRevenueHeader>
        <p>User Activity Overview</p>

        <StyledChartViewBtnCon>
          {ranges.map((range) => (
            <StyledChartViewBtn
              key={range}
              $active={activeRange === range}
              disabled={activeRange === range}
              onClick={() => {
                setActiveRange(range);
              }}
            >
              {range}
            </StyledChartViewBtn>
          ))}
        </StyledChartViewBtnCon>
      </StyledRevenueHeader>

      <StyledRevenueChartCon>
        <Chart type="line" data={data} options={options} />
      </StyledRevenueChartCon>
    </StyledGraphCon>
  );
};

export default UserActivityOverview;
