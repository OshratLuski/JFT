import main from "../assets/images/main2.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/LogoLanding";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Searching</span> App
          </h1>
          <p>
            Dear teacher, if you have reached a stage where you are looking for
            a teaching job and you need to menage your job offers - you have
            come to the right place! This is a unique website where you can
            menage all your offers . Good Luck
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="main imag" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
