import '../styles/navStyles.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <p className="logo">Math Magicians</p>
    <ul className="nav-links">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li className="link">
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
