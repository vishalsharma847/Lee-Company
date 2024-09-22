import React from "react";
import Header from "/src/Components/Header";
import Pages from "/src/Components/Pages";
import { BrowserRouter as Router, ScrollRestoration, UNSAFE_useScrollRestoration } from "react-router-dom";
// import { DataProvider } from './GlobalState'
import Footer from "/src/Components/Footer";
import "@coreui/coreui/dist/css/coreui.min.css";
import ScrollToTop from "/src/Scrolltotop";

const App = () => {

  return (
    // <DataProvider>
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Header/>
        <div className="flex flex-col justify-center w-full h-fit bg-gradient-to-b from-bodyprim to-bodysec">
        <Pages />
        </div>
        <Footer />
      </div>
    </Router>
    // </DataProvider>
  );
};
export default App;
