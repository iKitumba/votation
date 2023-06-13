import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  return (
    <form className={styles.loginForm}>
      <h2 className={styles.createFormTitle}>Preencha todos os dados</h2>
      <section className={styles.createFormFields}>
        <div className={styles.createFormLeft}>
          <label className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Nome</span>
            <input
              className={styles.input}
              type="text"
              minLength={7}
              required
              placeholder="Qual o seu nome?"
            />
          </label>
          <label className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Telefone</span>
            <input
              className={styles.input}
              type="tel"
              minLength={9}
              maxLength={9}
              required
              placeholder="Número de telefone"
            />
          </label>
          <label className={styles.inputLabel}>
            <span className={styles.inputLabelName}>E-Mail</span>
            <input
              className={styles.input}
              type="email"
              required
              placeholder="Seu email"
            />
          </label>
          <label className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Senha</span>
            <input
              className={styles.input}
              required
              type="password"
              placeholder="Digite a sua senha"
            />
          </label>
          <Link
            style={{
              display: "block",
              fontSize: 12,
              color: "#00c39a",
              textAlign: "center",
              textDecoration: "underline",
            }}
            href="/login"
          >
            Já tenho uma conta
          </Link>
          <button className={styles.submitButton}>Criar conta</button>
        </div>
      </section>
    </form>
  );
}
