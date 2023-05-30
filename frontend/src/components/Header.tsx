import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Votação
      </Link>

      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="/" className={styles.menuOptionLink}>
              Apresentação
            </Link>
          </li>
          <li>
            <Link href="/votation" className={styles.menuOptionLink}>
              Votações
            </Link>
          </li>
          <li>
            <Link href="/create" className={styles.menuOptionLink}>
              Criar
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles.signInButton}>Entrar</button>
    </header>
  );
};
