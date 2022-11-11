import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl bg-white py-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src="logo01.png" alt="icon" className="pe-2" />
          <img src="logo00.png" alt="icon-text" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row flex-column flex-xl-row text-center text-xl-start" id="navbarNav">
          <div className="col-9">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item px-3 h4">
                <Link className="nav-link text-dark" aria-current="page" to="#">Home</Link>
              </li>
              <li className="nav-item px-3 h4">
                <Link className="nav-link text-dark" to="#">Place to stay</Link>
              </li>
              <li className="nav-item px-3 h4">
                <Link className="nav-link text-dark" to="#">NFTs</Link>
              </li>
              <li className="nav-item px-3 h4">
                <Link className="nav-link text-dark">Community</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-xl-3">
            <div className="text-center p-2">
              <Link to="#" className="btn btn-lg px-3 text-white" id="connect-btn" style={{ background: "purple" }}>
                <span className="h4">Connect Wallet</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;