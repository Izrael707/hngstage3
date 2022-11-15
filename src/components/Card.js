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

export default Card;