import main from "../assets/images/main.svg";
import main1 from "../assets/images/13.png";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            This is a portal for listing various jobs. The user will be able to
            track their job application progress. All the CRUD operations for
            all applications are depicted. The dashboard shows the application
            status of all jobs. New jobs can be listed by the admin. Also the
            profile section lets the user to manage the user information.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main1} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
