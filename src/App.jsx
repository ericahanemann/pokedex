import { Outlet } from "react-router";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
}
