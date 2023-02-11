import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/index";
import GamePage from "./page/Game-page";
import Header from "./components/Header";
import OrderPage from "./page/Order-page";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
