import Card from "./components/Card";
import { cardData1 } from "./DummyData";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Top />
      <Middle />
      <CardList />
      <Banner />
    </div>
  );
}

const Top = () => {
  return (
    <div className="row pt-3 pt-xl-5">
      <div className="col-12 col-xl-6 p-3 p-xl-5">
        <div className="px-2 pt-5">
          <span className="display-5 fw-normal">Rent a <strong style={{ color: "#A02279" }}>Place</strong> away from <strong style={{ color: "#A02279" }}>Home</strong> in the <strong style={{ color: "#A02279" }}>Metaverse</strong></span>
        </div>
        <div className="row px-2">
          <div className="py-3 py-xl-5">
            <span className="h4" style={{ lineHeight: "1.3" }}>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</span>
          </div>
          <div className="d-flex">
            <input class="form-control p-2 p-xl-3" type="search" placeholder="Search for location" aria-label="Search" />
            <button class="btn border-start-0 rounded-end rounded-2 px-5" style={{ background: "#A02279" }} type="submit">
              <span className="text-white h5">Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-6 py-3 py-xl-5">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <div className="d-flex flex-column gap-2" style={{ paddingTop: "70px" }}>
            <img src="image001.png" alt="001" />
            <img src="image002.png" alt="002" />
          </div>
          <div className="d-flex flex-column gap-2">
            <img src="image003.png" alt="003" />
            <img src="image004.png" alt="004" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Middle = () => {
  return (
    <div className="container-fluid p-0">
      <div style={{ background: "#A02279" }} className="mt-3">
        <div className="row">
          <div className="col-md-4 p-1 text-center">
            <img src="mbtoken.png" alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 p-1 text-center">
            <img src="metamask.png" alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 p-1 text-center">
            <img src="opensea.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="h2 fw-semibold text-center">Inspiration for your next adventure</div>
      </div>
    </div>
  );
}

const CardList = () => {
  return (
    <div class="row px-2 py-5 px-lg-5">
      {cardData1.map((info, id) => (
        <div className="col-12 col-md-6 col-lg-3 p-2" key={id}>
          <Card title={info.title} price={info.price} distance={info.distance} time={info.time} logo={info.logo} />
        </div>
      ))}
    </div>
  )
}

const Banner = () => {
  return (
    <div className="row p-5 mt-5" style={{ background: "#A02279" }}>
      <div className="col-12 col-xl-6 p-5">
        <div className="display-6 fw-bold text-white py-4 pt-lg-5">
          Metabnb NFTs
        </div>
        <div className="fs-5 font-monospace lh-base fw-light text-white py-4">
          Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are tarded as NFTs. These NFTs gives our customer access to loads of our exclusive services.
        </div>
        <div className="py-5">
          <button className="btn btn-light btn-lg px-5" style={{ color: "#A02279" }}>Learn more</button>
        </div>
      </div>
      <div className="col-12 col-xl-6 py-3 py-xl-5">
        <div className="justify-content-center">
          <img src="frame01.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;