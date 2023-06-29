// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // showAlert function is used to show Alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(25 39 58)";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  //     <Alert alert={alert} />
  //       <TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/about",
  //     element: (
  //       <>
  //       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  //     <Alert alert={alert} />
  //     <About />
  //     </>
  //     ),
  //   },
  // ]);

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container"> 
        <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert}  mode={mode}/>}></Route>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
        {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
