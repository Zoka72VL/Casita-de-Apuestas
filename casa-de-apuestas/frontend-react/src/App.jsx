import "./App.css";
import Header from "./components/layout/Header.jsx";
import Content from "./components/layout/Content.jsx";
import Video from "./components/UI/Video.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Video />
      <Outlet/>
    </>
  );
}

export default App;
