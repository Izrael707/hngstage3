const Home = () => {
  return (
    <div className="container-fluid">
      <Top />
    </div>
  );
}

const Top = () => {
  return (
    <div className="row pt-3 pt-xl-5">
      <div className="col-12 col-xl-6 p-3 p-xl-5">
        <div className="px-2 pt-4">
          <span className="display-4 fw-normal">Rent a <strong style={{ color: "purple" }}>Place</strong> away from <strong style={{ color: "purple" }}>Home</strong> in the <strong style={{ color: "purple" }}>Metaverse</strong></span>
        </div>
        <div className="row px-2">
          <div className="py-3 py-xl-5">
            <span className="h4" style={{ lineHeight: "1.3" }}>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</span>
          </div>
          <div className="d-flex">
            <input class="form-control p-2 p-xl-3" type="search" placeholder="Search for location" aria-label="Search" />
            <button class="btn border-start-0 rounded-end rounded-2 px-5" style={{ background: "purple" }} type="submit">
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

export default Home;