import { Link } from "react-router-dom";
import Card from "./components/Card";

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

// dummy data
const cardData = [
  {
    title: "poppins",
    text: "loyalty",
    logo: "nft01.png"
  },
  {
    title: "ragae",
    text: "loyalty",
    logo: "nft02.png"
  },
  {
    title: "views",
    text: "loyalty",
    logo: "nft01.png"
  },
  {
    title: "astro",
    text: "loyalty",
    logo: "nft02.png"
  },
  {
    title: "johnny",
    text: "loyalty",
    logo: "nft03.png"
  },
  {
    title: "baking",
    text: "loyalty",
    logo: "nft02.png"
  },
  {
    title: "soda",
    text: "loyalty",
    logo: "nft01.png"
  },
  {
    title: "illumi",
    text: "loyalty",
    logo: "nft03.png"
  }
]

const CardList = () => {
  return (
    <div class="row px-3 py-5 px-lg-4">
      {cardData.map((info, id) => (
        <div class="col-12 col-md-6 col-xl-3 p-2" key={id}>
          <Card title={info.title} text={info.text} logo={info.logo} />
        </div>
      ))}
    </div>
  );
}

export default Place;