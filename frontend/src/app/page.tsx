import { Footer } from "@/components/Footer";
import styles from "./page.module.css";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.presentationSection}>
        <article className={styles.bannerSection}>
          <div className={styles.bannerSectionLeft}>
            <h1 className={styles.bannerSectionLeftTitle}>Votação</h1>
            <p className={styles.bannerSectionLeftDesc}>
              Uma <strong>forma</strong> antiga de <strong>resolver</strong>{" "}
              novos <strong>problemas</strong>
            </p>
          </div>

          <img src="/vote-illustration.svg" alt="Votação" />
        </article>

        <section className={styles.pilaresContainer}>
          <article className={styles.pilarContainer}>
            <div className={styles.pilarText}>
              Acreditamos que o pilar de uma sociedade igualitária seja uma onde
              todos possam decidir o que é melhor para todos
            </div>
            <div className={styles.pilarLugar}>1º</div>
          </article>

          <article className={styles.pilarContainer}>
            <div className={styles.pilarText}>
              Acreditamos que o pilar de uma sociedade igualitária seja uma onde
              todos possam decidir o que é melhor para todos
            </div>
            <div className={styles.pilarLugar}>2º</div>
          </article>
          <article className={styles.pilarContainer}>
            <div className={styles.pilarText}>
              Acreditamos que o pilar de uma sociedade igualitária seja uma onde
              todos possam decidir o que é melhor para todos
            </div>
            <div className={styles.pilarLugar}>3º</div>
          </article>
        </section>
      </section>
    </div>
  );
}
