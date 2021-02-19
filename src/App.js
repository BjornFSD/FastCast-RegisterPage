import "./App.scss";
import Header from "./components/mainBoxes/Header";
import Main from "./components/mainBoxes/Main";
import Footer from "./components/mainBoxes/Footer";
import Section from "./components/mainBoxes/Section";

import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Header />
        <Main />
        <Section />
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
