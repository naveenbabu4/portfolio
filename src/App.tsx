import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { lazy} from "react";

const Home = lazy( () => import("./pages/home"));


const App = () => {
  return <Router>
    <Routes>
      <Route path="/portfolio" element={<Home />} />
    </Routes>
  </Router>
};

export default App;
