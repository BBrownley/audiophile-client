import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useCartUpdate } from "./CartContext";
import ScrollToTop from "./hooks/ScrollToTop";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Header from "./components/Header/Header";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import ScaleLoader from "react-spinners/ScaleLoader";

import apiService from "./apiService"

const delayVisibility = keyframes`
  0%   {opacity: 0;}
  90%  {opacity: 0;}
  100% {opacity: 1;}
`;

const PingNotice = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: white;
  padding: 1rem;
  -webkit-box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  animation: ${delayVisibility} 3s forwards;
  opacity: 0;
  .ping-msg {
    margin-left: 2rem;
  }
`;

function App() {
  const initializeCart = useCartUpdate();
  const [pingingServer, setPingingServer] = useState(true);

  // ping server so it wakes up on user visit if asleep
  const pingServer = async () => {
    await axios.get(apiService.baseUrl);
    setPingingServer(false);
  };

  useEffect(() => {
    pingServer();
    initializeCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <Header />

          <Route exact path="/">
            <Hero />
          </Route>

          <MainWrapper />

          <Footer />

          {pingingServer && (
            // wait for 3 seconds then assume a server ping was required for startup

            <PingNotice>
              <ScaleLoader />{" "}
              <span className="ping-msg">Pinging server...</span>
            </PingNotice>
          )}
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
