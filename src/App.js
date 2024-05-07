import './App.css';
import React, {useEffect, useState} from "react";
import Wine from "./Pages/Wine";
import Navbar from "./Components/Navbar/Navbar";
import Sparkling from "./Pages/Sparkling";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import MailingList from "./Components/ MailingList/ MailingList";
import Footer from "./Components/Footer/Footer";
import Whisky from "./Pages/Whisky";
import Brandy from "./Pages/Brandy";
import Armagnac from "./Pages/Armagnac";
import Rum from "./Pages/Rum";
import Vodka from "./Pages/Vodka";
import Liquor from "./Pages/Liquor";
import Cocktails from "./Pages/ Cocktails";

function App() {

    let location = useLocation()
    const [drink, setDrink] = useState('Вино')
    const [openPage, setOpenPage] = useState(location)

    useEffect(()=>{
        setOpenPage(location)
    },[location])

  return (
      // <BrowserRouter>
        <div className='App'>
          <div className='container'>
              <Navbar drink={drink} setDrink={setDrink} page={openPage} />
              <Routes>
                  <Route path={'/'} element={<Wine />} />
                  <Route path={'/Sparkling'} element={<Sparkling />} />
                  <Route path={'/Whisky'} element={<Whisky />} />
                  <Route path={'/Brandy'} element={<Brandy />} />
                  <Route path={'/Armagnac'} element={<Armagnac />} />
                  <Route path={'/Rum'} element={<Rum />} />
                  <Route path={'/Vodka'} element={<Vodka />} />
                  <Route path={'/Liquor'} element={<Liquor />} />
                  <Route path={'/Cocktails'} element={<Cocktails />} />
              </Routes>
              <MailingList />
              <Footer />
          </div>
        </div>
      // </BrowserRouter>
  );
}

export default App;
