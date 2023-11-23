// import "./style/App.css";
import Journal from "./components/Journal.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //  ApolloMatic
    // </div>
        <Router>
            <Routes>
                <Route path="/journal" element={<Journal />} />
            </Routes>
        </Router>
  );
}

export default App;
