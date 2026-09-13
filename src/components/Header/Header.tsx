import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;

export const Header = () => {
  return (
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
            <span className={styles.icon}>♡</span>
          </NavLink>
          <NavLink to="/cart" className={styles.iconLink}>
            <span className={styles.icon}>🛒</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
