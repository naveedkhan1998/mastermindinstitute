import { BrowserRouter, Navigate, Route, Routes,HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import './App.css';

function App() {
  return (
    <>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<AboutUs/>}/>
            <Route path="contact" element={<ContactUs/>}/>
            
          </Route>
          
          <Route path="*" element={<h1>404 Page Not Found</h1>}/>

        </Routes>
    </HashRouter>
    </>
  );
}

export default App;
