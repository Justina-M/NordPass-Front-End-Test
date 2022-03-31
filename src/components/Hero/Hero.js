import heroImg from "../../assets/np-hero-image.png";
import Button from "../ui/Button/Button";

const Hero = () => {
  return (
    <section id="hero" className="Hero vw-100">
      <div className="row align-center content-width">
        <div className="col-6 col-lg-12">
          <div className="Hero__content">
            <h1 className="text-h1">Get your passwords organized</h1>
            <Button className="Button--large">Get Started</Button>
          </div>
        </div>
        <div className="col-6 col-lg-12">
          <img
            src={heroImg}
            alt="Desktop and mobile view of NordPass App"
            className="width-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
