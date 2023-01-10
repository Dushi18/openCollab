import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from "./components/header";
import { Home } from "./components/home";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import { Services } from "./components/services";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss"
import "./styles/Contact.scss";
import "./styles/Mediaquery.scss"


function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
};

export default App;
