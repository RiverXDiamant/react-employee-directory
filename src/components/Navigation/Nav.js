// link component
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        &nbsp;&nbsp;
        <Link to="/directory">Directory</Link>
      </div>
    </>
  );
}
