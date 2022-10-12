import React, { useContext } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GetHeaderData } from "../Layout/Main";
const Statistics = () => {
  const loadData = useContext(GetHeaderData);
  const data = loadData.data;
  return (
    <div className="md:w-[50%] md:mx-auto mt-10">
        <LineChart
          width={350}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
        </LineChart>
    </div>
  );
};

export default Statistics;
