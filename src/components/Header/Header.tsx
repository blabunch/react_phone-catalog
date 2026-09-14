import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import styles from './Header.module.scss';

const NavItem = ({
  to,
  end,
  children,
}: {
  to: string;
  end?: boolean;
  children: string;
}) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
    }
  >
    <span className={styles.navLinkText}>{children}</span>
  </NavLink>
);

const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`;

export const Header = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const closeMenu = () => setMenuIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.left}>
            <NavLink to="/" className={styles.logo}>
              NICE<span className={styles.logoAccent}>⚡</span>GADGETS
            </NavLink>

            <nav className={styles.nav}>
              <NavItem to="/" end>
                Home
              </NavItem>
              <NavItem to="/phones">Phones</NavItem>
              <NavItem to="/tablets">Tablets</NavItem>
              <NavItem to="/accessories">Accessories</NavItem>
            </nav>
          </div>

          <div className={styles.actions}>
            <div className={styles.iconActions}>
              <NavLink to="/favorites" className={styles.iconLink}>
                <Icon name="heart" />
              </NavLink>
              <NavLink to="/cart" className={styles.iconLink}>
                <Icon name="cart" />
              </NavLink>
            </div>
            <button
              type="button"
              className={styles.burgerButton}
              onClick={() => setMenuIsOpen(true)}
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
