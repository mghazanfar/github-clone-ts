import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import TrendingRepositories from "./pages/trending-repositories";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingDevelopers from "./pages/trending-developers";

function App() {
  return (
    <div className="bg-dark app-container p-5">
      <BrowserRouter>
        <Switch>
          <Route element={<TrendingRepositories />} path="/" />
          <Route element={<TrendingRepositories />} path="/repositories" />
          <Route element={<TrendingDevelopers />} path="/developers" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
