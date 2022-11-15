import { Link } from "react-router-dom";
import Card from "./components/Card";
import { cardData2 } from "./DummyData";

const Place = () => {
  return (
    <div className="p-2 p-lg-5">
      <ul className="nav gap-2 gap-lg-4">
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
        <li className="nav-item ps-2 ps-lg-4">
          <button type="button" className="btn border bg-white btn-lg">
            <span className="fs-5">Location</span>
            <i class="bi bi-sliders2 ps-5"></i>
          </button>
        </li>
      </ul>
      <CardList />
    </div>
  );
}

const CardList = () => {
  return (
    <div class="row px-2 py-5 px-lg-4">
      {cardData2.map((info, id) => (
        <div className="col-12 col-md-6 col-lg-3 p-2" key={id}>
          <Card title={info.title} price={info.price} distance={info.distance} time={info.time} logo={info.logo} />
        </div>
      ))}
    </div>
  );
}

export default Place;