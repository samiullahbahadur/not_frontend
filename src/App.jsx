import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ServyList from "./components/Servy/ServyList";
 import ServyFom from './components/Form/ServyForm'
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<ServyList />} />
          <Route path="form" element={<ServyFom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
