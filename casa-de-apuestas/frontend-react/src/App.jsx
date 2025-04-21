import { Outlet } from "react-router";
import "../src/App.css";
import Header from "./components/layout/Header.jsx";
import SidebarMenu from "./components/layout/SidebarMenu.jsx";
import Video from "./components/UI/Video.jsx";

function App() {
  return (
    <>
      <Video />
      <SidebarMenu />
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
