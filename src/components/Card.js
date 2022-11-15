const Card = ({ title, price, distance, time, logo }) => {
  return (
    <div className="border rounded border-2 p-2">
      <div>
        <img src={logo} alt="NFTs" className="card-img" />
      </div>
      <div className="pt-2">
        <span className="small">{title}</span>
        <span className="small float-end fw-semibold">{price}</span>
      </div>
      <div>
        <span className="small">{distance}</span>
        <span className="small float-end">{time}</span>
      </div>
      <div className="small pt-1">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
      </div>
    </div>
  );
}

export default Card;