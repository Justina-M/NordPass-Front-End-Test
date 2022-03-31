import { Transition } from "react-transition-group";
import LogoLink from "../Header/LogoLink";

const SideDrawer = ({ show, children }) => {
  return (
    <Transition in={show} timeout={240} mountOnEnter unmountOnExit>
      {(state) => (
        <div className={`SideDrawer fixed-full SideDrawer--${state}`}>
          <div className="SideDrawer__header">
            <LogoLink />
          </div>
          {children}
        </div>
      )}
    </Transition>
  );
};

export default SideDrawer;
