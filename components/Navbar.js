/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(window.scrollY >= sectionTop - 300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section with animation
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark py-3 fixed-top transition-all duration-500 ${scrolled ? 'bg-dark shadow-lg py-2' : 'bg-transparent py-3'}`}
      style={{
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        backgroundColor: scrolled ? 'rgba(91, 0, 0, 0.9)' : 'transparent',
        fontFamily: "'Playfair Display', serif",
        transition: 'all 0.5s ease'
      }}
    >
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="position-relative">
            <img 
              src={data.logo} 
              alt="Logo" 
              className="img-fluid" 
              style={{ 
                width: '60px', 
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '5px',
                transition: 'transform 0.5s ease'
              }}
            />
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 border border-warning rounded-circle animate__animated animate__pulse animate__infinite"
              style={{
                animationDuration: '3s',
                pointerEvents: 'none'
              }}
            ></div>
          </div>
          <h1 
            className="mb-0 ms-3 d-none d-lg-block" 
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              background: 'linear-gradient(to right, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            Food Court
          </h1>
        </div>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {data.links.map((link, index) => {
              const sectionId = link.url.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <li key={index} className="nav-item mx-2 position-relative">
                  <Link 
                    href={link.url}
                    onClick={(e) => scrollToSection(e, sectionId)}
                    className={`nav-link fs-5 position-relative px-3 py-2 ${isActive ? 'active' : ''}`}
                    style={{
                      transition: 'all 0.3s ease',
                      fontWeight: isActive ? 700 : 500
                    }}
                  >
                    {link.title}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <span 
                        className="position-absolute bottom-0 start-50 translate-middle-x"
                        style={{
                          height: '3px',
                          width: '80%',
                          background: 'linear-gradient(to right, #FFD700, #FFA500)',
                          borderRadius: '10px',
                          display: 'block',
                          animation: 'grow 0.5s forwards'
                        }}
                      ></span>
                    )}
                    
                    {/* Hover effect */}
                    <span 
                      className="position-absolute bottom-0 start-50 translate-middle-x hover-indicator"
                      style={{
                          height: '2px',
                          width: '0%',
                          background: 'linear-gradient(to right, #FFD700, #FFA500)',
                          borderRadius: '10px',
                          display: 'block',
                          transition: 'width 0.3s ease'
                      }}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
          {/* Reservation button */}
         
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes grow {
          from { width: 0%; }
          to { width: 80%; }
        }
        
        .nav-link:hover .hover-indicator {
          width: 80% !important;
        }
        
        .active {
          color: #FFD700 !important;
        }
        
        .btn-warning:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 165, 0, 0.6) !important;
        }
      `}</style>
    </nav>
  );
}