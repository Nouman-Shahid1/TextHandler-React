import React, { useState } from "react";
import Alert from "./Components/Alert";
import Navebar from "./Components/Navebar";
import TextForm from "./Components/TextForm";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextHandler -Dark Mode";
      // setInterval(() => {
      // document.title = "TextHandler is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextHandler Now";
      //   }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextHandler -Light Mode";
    }
  };
  return (
    <>
      <Navebar
        title="TextHandler"
        about="About"
        contact="Contact"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <TextForm mode={mode}/> */}
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
          />
        <Footer  mode={mode}/>
      </div>
    </>
  );
}

export default App;
