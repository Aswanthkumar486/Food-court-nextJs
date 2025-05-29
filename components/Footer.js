import React from "react";

export default function Footer({ data }) {
  return (
    <footer id="contact" className="text-white py-5" style={{ 
      background: 'linear-gradient(135deg, #8b0000 0%, #5a0000 100%)',
      fontFamily: "'Playfair Display', serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/food.png")',
        opacity: 0.05,
        pointerEvents: 'none'
      }}></div>
      
      <div className="container position-relative">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="d-flex align-items-center mb-4">
              <h2 className="h1 mb-0" style={{ 
                fontFamily: "'Dancing Script', cursive", 
                fontWeight: 700 
              }}>
                Food Court
              </h2>
            </div>
            <p className="mb-4 fs-5" style={{ lineHeight: '1.8' }}>
              {data.aboutText}
            </p>
            <div className="d-flex gap-3">
              {data.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-white fs-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours & Contact */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="h2 mb-4 pb-2 position-relative" style={{
              fontFamily: "'Satisfy', cursive",
              fontWeight: 400
            }}>
              Opening Hours
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '80px',
                height: '3px',
                background: '#FFD700'
              }}></div>
            </h4>
            <p style={{ 
              whiteSpace: "pre-line",
              fontSize: '1.1rem',
              lineHeight: '2'
            }} className="mb-4">
              {data.hours}
            </p>

            <h4 className="h2 mb-4 pb-2 position-relative" style={{
              fontFamily: "'Satisfy', cursive",
              fontWeight: 400
            }}>
              Contact Us
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '80px',
                height: '3px',
                background: '#FFD700'
              }}></div>
            </h4>
            <p style={{ 
              whiteSpace: "pre-line",
              fontSize: '1.1rem',
              lineHeight: '2'
            }} className="mb-0">
              {data.contact}
            </p>
          </div>

          {/* Newsletter & Payment Methods */}
          <div className="col-lg-4">
            <h4 className="h2 mb-4 pb-2 position-relative" style={{
              fontFamily: "'Satisfy', cursive",
              fontWeight: 400
            }}>
              Stay Updated
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '80px',
                height: '3px',
                background: '#FFD700'
              }}></div>
            </h4>
            <p className="mb-4 fs-5">
              Subscribe to get special offers and updates
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
            >
              <div className="input-group mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  required
                  style={{ 
                    border: 'none', 
                    borderRadius: '50px 0 0 50px',
                    fontFamily: "'Playfair Display', serif"
                  }}
                />
                <button 
                  className="btn btn-warning px-4" 
                  type="submit"
                  style={{ 
                    borderRadius: '0 50px 50px 0',
                    fontWeight: 600
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="mt-5">
              <h5 className="h3 mb-3" style={{ fontFamily: "'Satisfy', cursive" }}>
                Payment Methods
              </h5>
              <div className="d-flex flex-wrap gap-3 fs-2">
                <i className="bi bi-credit-card"></i>
                <i className="bi bi-paypal"></i>
                <i className="bi bi-google"></i>
                <i className="bi bi-apple"></i>
                <i className="bi bi-cash"></i>
                <i className="bi bi-credit-card-2-front"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5" style={{ 
          height: '1px', 
          background: 'rgba(255,255,255,0.2)' 
        }}></div>

        {/* Footer Bottom */}
        <div className="text-center pt-3">
          <p className="mb-0 fs-5" style={{ letterSpacing: '1px' }}>
            &copy; {new Date().getFullYear()} Food Court. All rights reserved. | 
            Crafted with <i className="bi bi-heart-fill text-danger"></i> for food lovers
          </p>
          <div className="mt-3">
            <span className="badge bg-warning text-dark me-2">Premium Ingredients</span>
            <span className="badge bg-warning text-dark me-2">Artisan Recipes</span>
            <span className="badge bg-warning text-dark">Family Tradition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}