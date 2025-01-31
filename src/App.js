import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Header from "./components/Navbar/Header";
import Topbar from "./components/Navbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
