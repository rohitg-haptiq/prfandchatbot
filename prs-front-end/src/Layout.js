import React from "react";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ChatBot from "./components/Chatbot/Chatbot";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}
