import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import DashNav from "../components/Dashnav";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div >
        <DashNav />
        <Outlet />
        <Footer />

      </div>
    </div>
  );
};

export default DashboardLayout;
