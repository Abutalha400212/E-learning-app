import React, { useContext } from "react";
import { GetHeaderData } from "../Layout/Main";
import ShowHeaderData from "./ShowHeaderData";

const Topics = () => {
  const contextData = useContext(GetHeaderData);
  const useQuizHeaderData = contextData.data;

  return <div className="grid md:grid-cols-3 gap-5 md:ml-24 md:mt-32 sm:grid-cols-1">{useQuizHeaderData.map((data) => <ShowHeaderData key={data.id} data ={data}></ShowHeaderData>)}</div>;
};

export default Topics;
