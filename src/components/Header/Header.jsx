import Container from '../Container/Container';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h3 className={styles.title}>Todo app redux</h3>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
