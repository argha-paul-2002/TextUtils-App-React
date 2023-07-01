// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  Routes,
  // Link,
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

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toogle =(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    showAlert("Theme changed Successfully", "success");
  }

  const toggleMode = () => {
    removeBodyClasses();
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(25 39 58)";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toogle={toogle}/>
      <Alert alert={alert} />
      <div className="container"> 
        <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here"  mode={mode}/>}></Route>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
        {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
