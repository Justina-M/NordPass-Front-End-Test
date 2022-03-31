import NPLink from "../NPLink/NPLink";

const NavMenu = ({ links, className }) => {
  return (
    <ul className={`NavMenu ${className ? className : ""}`}>
      {links.map((link) => (
        <li>
          <NPLink to={link.to} className="NavMenu__link">
            {link.title}
          </NPLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
