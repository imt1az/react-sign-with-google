import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Home = () => {
  const {user} = useFirebase();
  return (
    <div>
      <div className="md:grid grid-cols-2 gap-9 bg-orange-400 mt-0 h-auto container mx-auto">
        <div>
          <img src="cover.jpg" alt=""></img>
        </div>
        <div className="order-first my-auto">
          <h1 className="text-5xl font-extrabold">Welcome To Our Site</h1>
          <h1 className="text-3xl font-semibold text-gray-800 my-3">{user ? user.displayName : ''}</h1>
          <h1 className="text-5xl font-bold">See Our Reviews</h1>
          <hr className="w-72 mx-auto mt-5 h-4 border-0 bg-gray-600"></hr>
        </div>
      </div>
    </div>
  );
};

export default Home;
