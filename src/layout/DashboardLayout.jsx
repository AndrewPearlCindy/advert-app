import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import DashNav from "../components/Dashnav";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden lg:ml-60">
        <DashNav />
        <Outlet />
        <Footer />

      </div>
    </div>
  );
};

export default DashboardLayout;
