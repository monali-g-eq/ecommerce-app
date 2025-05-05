import React, { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Footer, Header } from "./components/index"
import { Outlet } from "react-router-dom";
import Header1 from "./components/Header1";
function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // always declared useDispatch at top level

  useEffect(() => {

  }, []);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>
  ) : (
    <div className="min-h-screen ">
      <Header1 />
      <main>
        {" "}
        <Outlet />
      </main>
      <Footer />

    </div>
  );
}

export default App;
