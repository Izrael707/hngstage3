import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl bg-white py-4">
      <div className="container-fluid px-2 px-xl-5">
        <Link className="navbar-brand" to="/">
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
                <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item px-3 h4">
                <Link className="nav-link text-dark" to="/place">Place to stay</Link>
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
              <button type="button" className="btn btn-lg px-3 text-white" id="connect-btn" style={{ background: "#A02279" }} data-bs-toggle="modal" data-bs-target="#modal-template">
                Connect Wallet
              </button>
              <div class="modal fade" id="modal-template" tabindex="-1" aria-labelledby="MyModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header px-4 py-3">
                      <h1 class="modal-title fs-4 fw-bold" id="MyModalLabel">Connect Wallet</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start px-4 py-3 d-flex flex-column">
                      <label className="small">Choose your preferred wallet:</label>
                      <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <button type="button" class="btn btn-lg btn-light text-start my-2 border rounded">
                          <img src="fox.png" alt="fox-icon" className="img-fluid pe-3" />
                          <span className="fs-5 fw-bold">Metamask</span>
                          <i class="bi bi-chevron-right float-end pt-1"></i>
                        </button>
                        <button type="button" class="btn btn-lg btn-light text-start my-2 border rounded">
                          <img src="WC.png" alt="fox-icon" className="img-fluid pe-3" />
                          <span className="fs-5 fw-bold">WalletConnect</span>
                          <i class="bi bi-chevron-right float-end pt-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;