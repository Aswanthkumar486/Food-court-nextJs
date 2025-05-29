export default function Cooks({ data }) {
  return (
    <section id="chefs" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-3">{data.title}</h2>
          <p className="lead fs-3">{data.description}</p>
        </div>
        
        <div className="row g-4">
          {data.chefs.map((chef, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-lg h-100">
                <div 
                  className="card-img-top"
                  style={{
                    height: '300px',
                    backgroundImage: `url(${chef.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="card-body text-center">
                  <h3 className="card-title h2">{chef.name}</h3>
                  <p className="card-text text-danger fw-bold">{chef.specialty}</p>
                  <p className="card-text">
                    <i className="bi bi-award me-2"></i>
                    Experience: {chef.experience}
                  </p>
                  <div className="mt-3">
                    <button className="btn btn-outline-danger me-2">
                      <i className="bi bi-instagram"></i>
                    </button>
                    <button className="btn btn-outline-danger me-2">
                      <i className="bi bi-twitter"></i>
                    </button>
                    <button className="btn btn-outline-danger">
                      <i className="bi bi-facebook"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}