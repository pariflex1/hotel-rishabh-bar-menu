import React, { useState, useEffect } from 'react';
import { menuData } from './data/menuData';
import CategorySection from './components/CategorySection';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].title);
  const [headerShrunk, setHeaderShrunk] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('.category-section');
    let current = '';

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id') || '';
      }
    });

    if (current) {
      const category = menuData.find(cat => `category-${cat.title.replace(/\s+/g, '-').toLowerCase()}` === current);
      if (category) setActiveCategory(category.title);
    }

    // Shrink header on scroll
    setHeaderShrunk(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (title: string) => {
    const element = document.getElementById(`category-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveCategory(title);
    }
  };

  return (
    <div className="app-container">
      <header className={`app-header ${headerShrunk ? 'header-shrunk' : ''}`}>
        <div className="header-glow"></div>
        <h1>Hotel Rishabh</h1>
        <p className="header-subtitle">BAR MENU</p>
        <div className="header-divider">
          <span className="divider-icon">🍸</span>
        </div>
      </header>

      <nav className="category-nav">
        <ul>
          {menuData.map((category) => (
            <li
              key={category.title}
              className={activeCategory === category.title ? 'active' : ''}
              onClick={() => scrollToCategory(category.title)}
            >
              <span className="nav-emoji">{category.emoji}</span>
              <span className="nav-text">{category.title.split('(')[0].trim()}</span>
            </li>
          ))}
        </ul>
      </nav>

      <main className="menu-content">
        {menuData.map((category, index) => (
          <CategorySection key={index} category={category} />
        ))}
      </main>

      <footer className="app-footer">
        <p>© 2026 Hotel Rishabh. All rights reserved.</p>
        <p>Drink Responsibly 🍷</p>
      </footer>

      {/* Sticky Call Button */}
      <a href="tel:+918127881420" className="sticky-call-btn" aria-label="Call Hotel Rishabh">
        <div className="call-btn-ripple"></div>
        <svg className="call-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" />
        </svg>
        <span className="call-btn-text">Call Us</span>
      </a>
    </div>
  );
};

export default App;
