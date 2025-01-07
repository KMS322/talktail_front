import "../../css/main.css";
import Home from "./home";
import About from "./about";
import Solution from "./solution";
import Contact from "./contact";
const Main = ({ currentPage }) => {
  console.log("currentPage : ", currentPage);
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "solution":
        return <Solution />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return <div className="main">{renderPage()}</div>;
};

export default Main;
