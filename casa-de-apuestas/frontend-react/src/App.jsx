import { Outlet } from "react-router";
import "../src/App.css";
import Header from "./components/layout/Header.jsx";
import SidebarMenu from "./components/layout/SidebarMenu.jsx";
import Video from "./components/UI/Video.jsx";

function App() {
  return (
    <>
      <Video/>
      <Header />
      <SidebarMenu />
      <main>
        {/* El contenido cambiará dependiendo de la ruta */}
        <Outlet/>
      </main>
     
    </>
  );
}

export default App;
