import React, { useState } from "react";
import LineChart from "../components/LineChart";
import { useParams } from "react-router-dom";
const StockData = [
  {
    id: 1,
    year: 2016,
    stockPrice: 80000,
  },
  {
    id: 2,
    year: 2017,
    stockPrice: 45677,
  },
  {
    id: 3,
    year: 2018,
    stockPrice: 78888,
  },
  {
    id: 4,
    year: 2019,
    stockPrice: 90000,
  },
  {
    id: 5,
    year: 2020,
    stockPrice: 4300,
  },
];
function Stock() {
  const { ticker } = useParams();
  const [chartData, setChartData] = useState({
    labels: StockData.map((data) => data.year),
    datasets: [
      {
        data: StockData.map((data) => data.stockPrice),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div style={{ width: 700 }}>
      <LineChart chartData={chartData} ticker={ticker} />
    </div>
  );
}

export default Stock;
