const Footer = () => {
  return ( 
    <div className="row bg-black">
      <div className="col-12 col-lg-3 d-flex flex-column">
        <div className="p-3 p-lg-5">
          <img src="footer01.png" alt="" />
        </div>
        <div className="d-flex pt-3 pt-lg-5 px-3 px-lg-5 pb-3 text-white">
          <i class="bi bi-facebook pe-4"></i>
          <i class="bi bi-instagram pe-4"></i>
          <i class="bi bi-twitter pe-4"></i>
        </div>
        <div className="text-white px-3 px-lg-5 py-3">
          <span className="fs-6">@ 2022 Metabnb</span>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="d-flex flex-column text-white py-3 py-lg-5 px-3 px-lg-5">
          <span className="fs-5 fw-semibold pb-2">Community</span>
          <span className="fs-6 py-1">NFT</span>
          <span className="fs-6 py-1">Tokens</span>
          <span className="fs-6 py-1">LandLords</span>
          <span className="fs-6 py-1">Discord</span>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="d-flex flex-column text-white py-3 py-lg-5 px-3 px-lg-5">
          <span className="fs-5 fw-semibold pb-2">Places</span>
          <span className="fs-6 py-1">Castle</span>
          <span className="fs-6 py-1">Farms</span>
          <span className="fs-6 py-1">Beach</span>
          <span className="fs-6 py-1">Learn more</span>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="d-flex flex-column text-white py-3 py-lg-5 px-3 px-lg-5">
          <span className="fs-5 fw-semibold pb-2">About us</span>
          <span className="fs-6 py-1">Road map</span>
          <span className="fs-6 py-1">Creators</span>
          <span className="fs-6 py-1">Career</span>
          <span className="fs-6 py-1">Contact us</span>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;