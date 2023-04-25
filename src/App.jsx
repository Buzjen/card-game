import Header from "./components/header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/content/Content";
import Info from "./components/Info/Info";
import { useState } from "react";

const App = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className="App">
      {openInfo && <Info closeInfo={() => setOpenInfo(false)} />}
      <Header openInfo={() => setOpenInfo(true)} />
      <Menu />
      <Content />
    </div>
  );
};

export default App;
