import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import styles from './Header.module.scss';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;

const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`;

export const Header = () => {
  const [isMenuOpen, setIsMenuIsOpen] = useState(false);

  const closeMenu = () => setIsMenuIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.left}>
            <NavLink to="/" className={styles.logo}>
              NICE<span className={styles.logoAccent}>⚡</span>GADGETS
            </NavLink>

            <nav className={styles.nav}>
              <NavLink to="/" end className={getNavLinkClass}>
                Home
              </NavLink>
              <NavLink to="/phones" className={getNavLinkClass}>
                Phones
              </NavLink>
              <NavLink to="/tablets" className={getNavLinkClass}>
                Tablets
              </NavLink>
              <NavLink to="/accessories" className={getNavLinkClass}>
                Accessoaries
              </NavLink>
            </nav>
          </div>

          <div className={styles.actions}>
            <NavLink to="/favorites" className={styles.iconLink}>
              <Icon name="heart" />
            </NavLink>
            <NavLink to="/cart" className={styles.iconLink}>
              <Icon name="cart" />
            </NavLink>
            <button
              type="button"
              className={styles.burgerButton}
              onClick={() => setIsMenuIsOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <NavLink to="/" className={styles.logo} onClick={closeMenu}>
              NICE<span className={styles.logoAccent}>⚡</span>GADGETS
            </NavLink>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <Icon name="close" />
            </button>
          </div>

          <nav className={styles.mobileNav}>
            <NavLink
              to="/"
              end
              className={getMobileNavLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/phones"
              className={getMobileNavLinkClass}
              onClick={closeMenu}
            >
              Phones
            </NavLink>
            <NavLink
              to="/tablets"
              className={getMobileNavLinkClass}
              onClick={closeMenu}
            >
              Tablets
            </NavLink>
            <NavLink
              to="/accessories"
              className={getMobileNavLinkClass}
              onClick={closeMenu}
            >
              Accessories
            </NavLink>
          </nav>
          <div className={styles.mobileMenuFooter}>
            <NavLink to="/favorites" className={styles.iconLink}>
              <Icon name="heart" />
            </NavLink>
            <NavLink to="/cart" className={styles.iconLink}>
              <Icon name="cart" />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
