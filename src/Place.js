import { Link } from "react-router-dom";

const Place = () => {
  return (
    <div className="p-2 p-lg-4">
      <ul className="nav">
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" aria-current="page" to="#">Restaurant</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Cottage</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Castle</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Fantasy city</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">beach</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Cabins</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Off-grid</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Farm</Link>
        </li>
        <li className="nav-item ps-4">
          <button type="button" className="btn border bg-white btn-lg">
            <span className="fs-5">Location</span>
            <i class="bi bi-sliders2 ps-5"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Place;