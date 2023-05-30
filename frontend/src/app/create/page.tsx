import { ImagePicker } from "@/components/ImagePicker";
import styles from "./page.module.css";
import { AddCandidateButton } from "@/components/AddCandidateButton";

const Create = () => {
  return (
    <section className={styles.createContainer}>
      <h1 className={styles.createMainTitle}>Comece com a justiça</h1>

      <section className={styles.createForms}>
        <form className={styles.createFormFirst}>
          <h2 className={styles.createFormTitle}>Criar votação</h2>
          <label className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Titulo</span>
            <input
              className={styles.input}
              type="text"
              placeholder="Qual a finalidade da votação?"
            />
          </label>
          <label className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Descrição</span>
            <textarea
              className={styles.createFormFirstDescription}
              placeholder="Descrição da votação"
            />
          </label>
          <div className={styles.inputsDateContainer}>
            <label className={styles.inputLabel}>
              <span className={styles.inputLabelName}>Início</span>
              <input className={styles.input} type="date" />
            </label>
            <label className={styles.inputLabel}>
              <span className={styles.inputLabelName}>Fim</span>
              <input className={styles.input} type="date" />
            </label>
          </div>
          <button className={styles.submitButton}>Criar</button>
        </form>

        <form className={styles.createFormSecond}>
          <h2 className={styles.createFormTitle}>Adicionar cadidato</h2>
          <section className={styles.createFormFields}>
            <div className={styles.createFormLeft}>
              <label className={styles.inputLabel}>
                <span className={styles.inputLabelName}>Nome</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Nome completo do candidato"
                />
              </label>
              <label className={styles.inputLabel}>
                <span className={styles.inputLabelName}>Ocupação</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Ocupação do candidato"
                />
              </label>
              <label className={styles.inputLabel}>
                <span className={styles.inputLabelName}>Proposta</span>
                <textarea
                  style={{ height: 88 }}
                  className={styles.createFormFirstDescription}
                  placeholder="Por que escolher esse candidato específico?"
                />
              </label>
            </div>
            <div className={styles.createFormRight}>
              <ImagePicker />
              <AddCandidateButton />
            </div>
          </section>
        </form>
      </section>
    </section>
  );
};

export default Create;
