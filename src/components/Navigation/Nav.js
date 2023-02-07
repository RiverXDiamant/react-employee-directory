// link component
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img
            src={process.env.PUBLIC_URL + "images/auburn-medical-logo.png"}
            alt="auburn medical logo"
            width={100}
            height={100}
          />
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          &nbsp;&nbsp;
          <Link to="/directory">Directory</Link>
          &nbsp;&nbsp;
          <Link to="#contactus">Contact Us</Link>
        </div>
      </div>
    </>
  );
}
