import NavMenu from "../../ui/NavMenu/NavMenu";

const LINKS = [
  { title: "Features", to: "#" },
  { title: "Pricing", to: "#" },
  { title: "Apps", to: "#" },
  { title: "Blog", to: "#" },
  { title: "Help", to: "#" },
  { title: "My Account", to: "#" },
];

const HeaderNav = ({ className }) => {
  return <NavMenu links={LINKS} className={className} />;
};

export default HeaderNav;
