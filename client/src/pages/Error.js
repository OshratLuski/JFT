import { Link } from "react-router-dom";
import img from "../assets/images/404.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Error page (404)" />
        <h3>Sorry, the page you are looking for is Not found</h3>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
