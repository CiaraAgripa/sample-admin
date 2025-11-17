import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ChartDataset, ChartOptions } from "chart.js";
import { StyledChartViewBtn, StyledChartViewBtnCon, StyledGraphCon, StyledRevenueChartCon, StyledRevenueHeader } from "../styled";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Chart = dynamic(() => import("react-chartjs-2").then((mod) => mod.Chart), { ssr: false });

const Revenue = () => {
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
        type: "bar",
        label: "Orders",
        data: [120, 150, 90, 180, 200, 160, 220],
        backgroundColor: "#7942EE",
        borderRadius: 2,
        yAxisID: "yOrders",
        barThickness: 16,
      },
      {
        type: "line",
        label: "Revenue",
        data: [2100, 3000, 1000, 3600, 4000, 3200, 2000],
        borderColor: "#19C553",
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "rgba(25, 197, 83, 0.2)");
          gradient.addColorStop(0.5, "rgba(25, 197, 83, .05)");
          gradient.addColorStop(1, "rgba(25, 197, 83, 0)");
          return gradient;
        },
        borderWidth: 2,
        tension: 0.3,
        yAxisID: "yRevenue",
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
      yOrders: {
        type: "linear" as const,
        position: "right" as const,
        display: false,
      },
      yRevenue: {
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
        <p>Revenue</p>

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
        <Chart type="bar" data={data} options={options} />
      </StyledRevenueChartCon>
    </StyledGraphCon>
  );
};

export default Revenue;
