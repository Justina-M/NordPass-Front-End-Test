import { ReactComponent as LogoSvg } from "../../../assets/logo.svg";

const LogoLink = ({ linkTo }) => {
  return (
    <a href={linkTo} aria-label="logo">
      <LogoSvg />
    </a>
  );
};

export default LogoLink;
