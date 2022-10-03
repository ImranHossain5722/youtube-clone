import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{height:"7.5hv"}} >
        <Navbar />
      </div>
      <div className="flex " style={{height:"92.5vh"}}>
       <Sidebar/>
      </div>
    </div>
  );
};

export default Home;
