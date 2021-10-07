import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useCartUpdate } from "./CartContext";
import ScrollToTop from "./hooks/ScrollToTop";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Header from "./components/Header/Header";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  const initializeCart = useCartUpdate();

  useEffect(() => {
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
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
