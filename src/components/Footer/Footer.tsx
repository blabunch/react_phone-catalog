import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <Link to="/" className={styles.logo}>
          NICE<span className={styles.logoAccent}>⚡</span>GADGETS
        </Link>

        <nav className={styles.navLink}>
          <a
            href="https://github.com/blabunch/react_phone-catalog"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a href="#" className={styles.navLink}>
            Contacts
          </a>
          <a href="#" className={styles.navLink}>
            Rights
          </a>
        </nav>

        <div className={styles.backToTop}>
          <span className={styles.backToTopText}> Back to Top</span>
          <button
            type="button"
            className={styles.backToTopButton}
            onClick={scrollToTop}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
