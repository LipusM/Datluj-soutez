const c = console.log.bind(document);

import "./app.scss";
import { Outlet } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

const App = () => {

  return (
    <div className="container">
      <Header />
      <HomePage />
        <Outlet />
    </div>
  )

}

export default App;
