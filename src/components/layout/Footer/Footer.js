import NavMenu from "../../ui/NavMenu/NavMenu";
import NPLink from "../../ui/NPLink/NPLink";

const LINKS = [
  { title: "Privacy Policy", to: "#" },
  { title: "Terms of Service", to: "#" },
];

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <div className="row content-width space-between flex-end pt-7 pb-7">
        <div className="col-6">
          <h6 className="mb-2 text-h6">Engage</h6>
          <NavMenu
            links={LINKS}
            className="NavMenu--column NavMenu--secondary"
          />
        </div>
        <div className="Footer__copyright col-6 text-right">
          <span>Copyright @ {currYear}</span>{" "}
          <NPLink to="https://nordpass.com/">NordPass.com</NPLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
