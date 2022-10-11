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
    <div className="md:w-1/2 md:mx-auto mt-10">
        <LineChart
          width={450}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
