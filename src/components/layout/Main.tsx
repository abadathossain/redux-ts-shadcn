import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Counter from "@/pages/Counter";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Counter />
      <Outlet />
    </div>
  );
};

export default Main;
