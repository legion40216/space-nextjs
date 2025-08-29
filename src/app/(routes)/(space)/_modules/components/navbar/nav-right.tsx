import NavGroup from "./nav-right/nav-group";
import NavMobile from "./nav-right/nav-mobile";

export default function NavRight() {
  return (
    <div>
      <div className="hidden md:block">
        <NavGroup/>
      </div>
      <div className="md:hidden">
        <NavMobile />
      </div>
    </div>
  );
}
