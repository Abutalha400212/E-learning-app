import React, { useContext } from "react";
import { GetHeaderData } from "../Layout/Main";
import ShowHeaderData from "./ShowHeaderData";

const Topics = () => {
  const contextData = useContext(GetHeaderData);
  const useQuizHeaderData = contextData.data;

  return <div>{useQuizHeaderData.map((data) => <ShowHeaderData key={data.id} data ={data}></ShowHeaderData>)}</div>;
};

export default Topics;
