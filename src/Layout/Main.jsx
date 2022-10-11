import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export const GetHeaderData = createContext([]);
const Main = () => {
  const itemsData = useLoaderData();

  return (
    <GetHeaderData.Provider value={itemsData}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </GetHeaderData.Provider>
  );
};

export default Main;
