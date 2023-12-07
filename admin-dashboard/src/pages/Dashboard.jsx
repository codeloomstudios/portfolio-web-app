import React, { useEffect } from "react";
import { Layout } from "antd";
import SideMenu from "../partials/SideMenu";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import AddProject from "./AddProject";
import Projects from "./Projects";

const { Content } = Layout;

const Dashboard = () => {
  const isLogged = window.localStorage.getItem("LoggedIn");

  // If not logged in, redirect to login page
  useEffect(() => {
    // Define the effect to monitor changes in localStorage
    const handleStorageChange = () => {
      const updatedIsLogged = window.localStorage.getItem("LoggedIn");
      if (!updatedIsLogged) {
        // If not logged in, redirect to login page
        window.location.href = "/login";
      }
    };

    // Listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [500]);

  if (isLogged == "false") {
    // If not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Layout>
        <Content style={{ padding: "24px" }}>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/addProject" element={<AddProject />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
