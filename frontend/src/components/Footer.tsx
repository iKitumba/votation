"use client";

import styles from "./Footer.module.css";
import {
  FacebookLogo,
  TiktokLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <>
      <p className={styles.socialMediaTitle}>Siga Nossas Redes Sociais</p>

      <footer className={styles.socialLinks}>
        <FacebookLogo size={52} color="#00C39A" />
        <TwitterLogo size={53} color="#00C39A" />
        <TiktokLogo size={53} color="#00C39A" />
        <WhatsappLogo size={53} color="#00C39A" />
      </footer>
    </>
  );
};
