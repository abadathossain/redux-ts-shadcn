import Logo from "@/assets/Logo";
import { ModeToggle } from "../mode-toggle";

const NavBar = () => {
  return (
    <div className="container flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
