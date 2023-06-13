"use client";

import Link from "next/link";
import { House, ListBullets, PlusCircle } from "@phosphor-icons/react";
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
              <span className={styles.menuOptionLinkIcon}>
                <House size={28} />
              </span>
              <span className={styles.menuOptionLinkText}>Apresentação</span>
            </Link>
          </li>
          <li>
            <Link href="/votation" className={styles.menuOptionLink}>
              <span className={styles.menuOptionLinkIcon}>
                <ListBullets size={28} />
              </span>
              <span className={styles.menuOptionLinkText}>Votações</span>
            </Link>
          </li>
          <li>
            <Link href="/create" className={styles.menuOptionLink}>
              <span className={styles.menuOptionLinkIcon}>
                <PlusCircle size={28} />
              </span>
              <span className={styles.menuOptionLinkText}>Criar</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/login">
        <button className={styles.signInButton}>Entrar</button>
      </Link>
    </header>
  );
};
