export default function Services({ data }) {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-3 text-center mb-5">Our Services</h2>
        <div className="row g-4">
          {data.map((service, index) => (
            <div key={index} className="col-md-4 text-center">
              <div className="icon-box mx-auto mb-4">
                <i className={`bi ${service.icon} fs-1 text-white`}></i>
              </div>
              <h3 className="h2">{service.title}</h3>
              <p className="fs-5">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}