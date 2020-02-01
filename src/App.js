/** @format */

import React from "react";
import "./App.css";

// redux stuffs
import { Provider } from "react-redux";
import store from "./redux/store";

import Navbar from "./components/bars/Navbar";
import Sidebar from "./components/bars/Sidebar";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Dashboard />

        <h1>hello</h1>
      </div>
    </Provider>
  );
}

export default App;
