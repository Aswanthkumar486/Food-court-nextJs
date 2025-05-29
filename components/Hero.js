/* eslint-disable @next/next/no-img-element */

export default function Hero({ data }) {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {data.carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Inner Slides */}
      <div className="carousel-inner">
        {data.carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.image}   
              className="d-block w-100"
              alt={item.title}
           
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
             
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
