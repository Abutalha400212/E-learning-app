import React, { useContext } from "react";
import { Line, LineChart } from "recharts";
import { GetHeaderData } from "../Layout/Main";
const Statistics = () => {
    const datum = useContext(GetHeaderData)
    const data = JSON.stringify(datum.data)
    console.log(data)
  return (
    <div className="w-1/2 mx-auto mt-12">
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="name" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Statistics;
