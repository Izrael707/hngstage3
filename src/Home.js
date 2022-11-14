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

const Middle = () => {
  return (
    <div className="container-fluid p-0">
      <div style={{ background: "purple" }}>
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

const Card = ({ title, text, logo }) => {
  return (
    <div class="card p-3">
      <img src={logo} class="card-img-top" alt="nfts" />
      <div class="card-body">
        <div class="card-title d-flex justify-content-between">
          <span className="fs-6">{title}</span>
          <span className="fs-6 fw-semibold">{title}</span>
        </div>
        <div class="card-text d-flex justify-content-between">
          <span className="fs-6 text-break">{text}</span>
          <span className="fs-6 text-break">{text}</span>
        </div>
        <div>
          <div className="ratings">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
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
    <div class="row px-4 py-2 px-xl-5">
      {cardData.map((info, key) => (
        <div class="col-12 col-md-6 col-xl-3 p-2">
          <Card title={info.title} text={info.text} logo={info.logo} />
        </div>
      ))}
    </div>
  )
}

const Banner = () => {
  return (
    <div className="row p-5 mt-5" style={{ background: "purple" }}>
      <div className="col-12 col-xl-6 p-5">
        <div className="display-6 fw-bold text-white py-4 pt-lg-5">
          Metabnb NFTs
        </div>
        <div className="fs-5 font-monospace lh-base fw-light text-white py-4">
          Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are tarded as NFTs. These NFTs gives our customer access to loads of our exclusive services.
        </div>
        <div className="py-5">
          <button className="btn btn-light btn-lg px-5" style={{ color: "purple" }}>Learn more</button>
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