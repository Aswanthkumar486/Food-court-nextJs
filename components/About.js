export default function About({ data }) {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="display-3 mb-4 text-center">{data.title}</h2>
            <p className="lead" style={{ lineHeight: '2' }}>
              {data.content}
            </p>
          </div>
          <div className="col-md-6 text-center">
            <div 
              className="rounded-5 overflow-hidden shadow-lg mx-auto" 
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                width: '100%'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}