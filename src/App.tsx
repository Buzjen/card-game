import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Auth } from "./Pages/Auth";
import { Configuration } from "./Pages/Configuration";
import { NotFound } from "./Pages/NotFound";

export const App = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-gray-400 to-red-400 overflow-x-hidden  overflow-y-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Configuration" element={<Configuration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
