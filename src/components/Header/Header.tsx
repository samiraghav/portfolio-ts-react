import { useState } from 'react';
import { Container } from './styles';
import { NavHashLink, HashLink } from 'react-router-hash-link'; // Removed Router import
import CV from '../../assets/SamirbalasahebAghavResume.pdf'; // Your CV file

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      {/* Removed Router wrapper */}
      <HashLink smooth to="#home" className="logo">
        <span>Samir</span>
        <span>Aghav</span>
      </HashLink>

      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>

      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="#experience" onClick={closeMenu}>
          Experience
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Project
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href={CV} download className="button">
          CV
        </a>
      </nav>

      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Container>
  );
}
