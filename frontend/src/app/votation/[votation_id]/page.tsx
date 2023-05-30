import { VoteButton } from "@/components/VoteButton";
import styles from "./page.module.css";

interface VotationProps {
  params: {
    votation_id: string;
  };
}

const Votation = ({ params }: VotationProps) => {
  return (
    <section className={styles.votationContainer}>
      <section className={styles.votationLeft}>
        <h1 className={styles.votationTitle}>Eleições gerais de Angola</h1>

        <article className={styles.votationCardInfo}>
          <p className={styles.votationCardInfoDescription}>
            Lembre-se de que essa estrutura básica não inclui recursos como
            validação de login, segurança de senha, prevenção contra votos
            duplicados, entre outros. Esses aspectos devem ser considerados e
            implementados de acordo com as necessidades específicas do seu
            sistema.
          </p>

          <time className={styles.votationCardInfoTime}>
            <span className={styles.votationCardInfoTimeKey}>
              Data de início:{" "}
            </span>{" "}
            <strong className={styles.votationCardInfoTimeValue}>
              13.02.2004
            </strong>
          </time>
          <div className={styles.votationCardInfoTotal}>
            <span className={styles.votationCardInfoTotalKey}>Votantes: </span>{" "}
            <strong className={styles.votationCardInfoTotalValue}>
              1.246.700
            </strong>
          </div>
          <time className={styles.votationCardInfoTime}>
            <span className={styles.votationCardInfoTimeKey}>
              Data de fim:{" "}
            </span>{" "}
            <strong className={styles.votationCardInfoTimeValue}>
              13.02.2023
            </strong>
          </time>

          <p className={styles.votationCardInfoAlert}>
            Analise as propostas e escolha com clareza
          </p>
        </article>
      </section>

      <section className={styles.votationRight}>
        <h2 className={styles.votationRightTitle}>Candidatos</h2>

        <section className={styles.votationCandidateContainer}>
          {[1, 2, 3, 4, 5].map((n) => (
            <section className={styles.votationCandidate} key={n}>
              <header className={styles.votationCandidateHeader}>
                <div className={styles.votationCandidateHeaderPicture}></div>
                <div className={styles.votationCandidateHeaderInfo}>
                  <strong className={styles.votationCandidateName}>
                    Alberto Dos Santos Kitumba
                  </strong>
                  <span className={styles.votationCandidateOccupation}>
                    Programador & UI/UX Designer
                  </span>
                </div>
              </header>

              <article className={styles.votationCandidateProposal}>
                <h3 className={styles.votationCandidateProposalTitle}>
                  Proposta:
                </h3>
                <p className={styles.votationCandidateProposalContent}>
                  Essa é apenas uma sugestão básica de estrutura de banco de
                  dados. Você pode adicionar mais campos às tabelas, conforme
                  necessário, para atender aos requisitos específicos do seu
                  sistema.
                </p>

                <VoteButton />
              </article>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Votation;
