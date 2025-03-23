import React, { useState, useEffect } from 'react';
import { Camera, Mountain, GlassFull, Facebook, Instagram, Linkedin, Pinterest, Mail, Phone, MapPin } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll animation
  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollElements = document.querySelectorAll('.scroll-animation');
      
      const elementInView = (el: Element, percentageScroll = 90) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
          elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
      };
      
      scrollElements.forEach(el => {
        if (elementInView(el)) {
          el.classList.add('scrolled');
        } else {
          el.classList.remove('scrolled');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);
  
  // Handle contact form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLInputElement).value;
    
    if (!name || !email || !message) {
      alert('Vă rugăm să completați toate câmpurile obligatorii.');
      return;
    }
    
    alert('Mulțumim pentru mesaj! Vom reveni cu un răspuns cât mai curând.');
    form.reset();
  };
  
  return (
    <div className="app">
      {/* Header & Navigation */}
      <header>
        <div className="container navbar">
          <a href="#" className="logo">Alex<span>Foto</span></a>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <nav>
            <ul className={isMenuOpen ? 'active' : ''}>
              <li><a href="#" className="active">Acasă</a></li>
              <li><a href="#portfolio">Portofoliu</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Capturând momente unice prin obiectivul camerei</h1>
            <p>Pasionat de fotografie, specializat în peisaje, portrete și evenimente speciale</p>
            <a href="#portfolio" className="btn">Vezi portofoliul meu</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="section-title">
            <h2>Despre Mine</h2>
          </div>
          <div className="about-content">
            <div className="about-img">
              <img src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Alex Fotograf" />
            </div>
            <div className="about-text">
              <h3>Pasionat de artă și fotografie</h3>
              <p>Bine ai venit în lumea mea vizuală! Sunt Alex, un fotograf pasionat cu peste 5 ani de experiență în capturarea momentelor care contează. Fotografiile mele sunt o combinație între tehnici clasice și abordări moderne, rezultând imagini care spun povești autentice.</p>
              <p>Călătoriile, natura și oamenii sunt principalele mele surse de inspirație. Fiecare fotografie este rezultatul unui proces creativ care începe cu o idee și se transformă într-o poveste vizuală unică.</p>
              <h4>Specializări:</h4>
              <div className="skills">
                <span className="skill-tag">Fotografie de peisaj</span>
                <span className="skill-tag">Portrete</span>
                <span className="skill-tag">Fotografie urbană</span>
                <span className="skill-tag">Fotografie de eveniment</span>
                <span className="skill-tag">Editare foto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-animation">
        <div className="container">
          <div className="section-title">
            <h2>Servicii</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <Camera size={48} className="service-icon" />
              <h3>Ședințe foto portret</h3>
              <p>Captez esența personalității tale prin portrete profesionale în studio sau în locații speciale.</p>
            </div>
            <div className="service-card">
              <Mountain size={48} className="service-icon" />
              <h3>Fotografie de peisaj</h3>
              <p>Explorarea și surprinderea frumuseții naturii în cele mai spectaculoase imagini.</p>
            </div>
            <div className="service-card">
              <GlassFull size={48} className="service-icon" />
              <h3>Evenimente speciale</h3>
              <p>Imortalizez momentele importante din viața ta - nunți, botezuri, aniversări și alte ocazii speciale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="scroll-animation">
        <div className="container">
          <div className="section-title">
            <h2>Portofoliu</h2>
          </div>
          <div className="portfolio-filter">
            <button className="filter-btn active">Toate</button>
            <button className="filter-btn">Peisaje</button>
            <button className="filter-btn">Portrete</button>
            <button className="filter-btn">Evenimente</button>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Peisaj montan" />
              <div className="portfolio-overlay">
                <h3>Peisaj montan</h3>
                <p>Fotografie de peisaj</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Portret urban" />
              <div className="portfolio-overlay">
                <h3>Portret urban</h3>
                <p>Fotografie de portret</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Nuntă elegantă" />
              <div className="portfolio-overlay">
                <h3>Nuntă elegantă</h3>
                <p>Fotografie de eveniment</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80" alt="Răsărit în natură" />
              <div className="portfolio-overlay">
                <h3>Răsărit în natură</h3>
                <p>Fotografie de peisaj</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Portret artistic" />
              <div className="portfolio-overlay">
                <h3>Portret artistic</h3>
                <p>Fotografie de portret</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Concert live" />
              <div className="portfolio-overlay">
                <h3>Concert live</h3>
                <p>Fotografie de eveniment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-animation">
        <div className="container">
          <div className="section-title">
            <h2>Ce Spun Clienții</h2>
          </div>
          <div className="testimonials-container">
            <div className="testimonial">
              <div className="testimonial-text">
                <p>"Alex are un talent deosebit în a surprinde esența momentelor. Ședința foto a fost o experiență relaxantă și rezultatele au depășit așteptările noastre!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Maria și Andrei</h4>
                  <p>Ședință foto de nuntă</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                <p>"Am colaborat cu Alex pentru o campanie de brand și a înțeles perfect viziunea noastră. Profesionalism și creativitate la superlativ!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Elena Popescu</h4>
                  <p>Manager Marketing</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                <p>"Fotografiile de peisaj realizate de Alex transmit emoție și profunzime. Recomand cu încredere serviciile lui tuturor iubitorilor de artă fotografică."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Mihai Ionescu</h4>
                  <p>Colecționar de artă</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta">
        <div className="container">
          <h2>Pregătit să creăm împreună amintiri de neuitat?</h2>
          <p>Contactează-mă pentru a discuta despre proiectul tău fotografic.</p>
          <a href="#contact" className="btn cta-btn">Contactează-mă</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-box">
                <Mail size={32} className="contact-icon" />
                <h3>Email</h3>
                <p>alex@fotograf.ro</p>
              </div>
              <div className="contact-box">
                <Phone size={32} className="contact-icon" />
                <h3>Telefon</h3>
                <p>+40 712 345 678</p>
              </div>
              <div className="contact-box">
                <MapPin size={32} className="contact-icon" />
                <h3>Locație</h3>
                <p>București, România</p>
              </div>
            </div>
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nume Complet *</label>
                  <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" name="phone" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesaj *</label>
                  <textarea id="message" name="message" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn">Trimite Mesaj</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Alex<span>Foto</span></h3>
              <p>Transformând momente obișnuite în amintiri extraordinare prin puterea fotografiei.</p>
              <div className="social-links">
                <a href="#"><Facebook size={20} /></a>
                <a href="#"><Instagram size={20} /></a>
                <a href="#"><Linkedin size={20} /></a>
                <a href="#"><Pinterest size={20} /></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Navigare rapidă</h3>
              <ul className="footer-links">
                <li><a href="#">Acasă</a></li>
                <li><a href="#portfolio">Portofoliu</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <p><Mail size={16} className="footer-icon" /> alex@fotograf.ro</p>
              <p><Phone size={16} className="footer-icon" /> +40 712 345 678</p>
              <p><MapPin size={16} className="footer-icon" /> București, România</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 AlexFoto. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;