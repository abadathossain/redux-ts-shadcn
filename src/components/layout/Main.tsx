import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Counter from "@/pages/Counter";
import Task from "@/pages/Task";

const Main = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
      <Counter />
      <Task />
    </div>
  );
};

export default Main;
