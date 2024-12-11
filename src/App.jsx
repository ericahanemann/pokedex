import { Outlet } from "react-router";
import TopBar from "./components/TopBar/TopBar";

export default function App() {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <Outlet />
    </div>
  );
}
