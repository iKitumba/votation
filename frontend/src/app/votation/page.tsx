import { votationDummyDate } from "@/utils/votationDummyData";
import styles from "./page.module.css";
import { VotationAliveCard } from "@/components/VotationAliveCard";

const Votation = () => {
  return (
    <div className={styles.votationContainer}>
      <h1 className={styles.votationMainTitle}>Ajude a escolher os melhores</h1>

      <section className={styles.votationAliveContainer}>
        <h2 className={styles.votationAliveTitle}>A decorrer</h2>
        <section className={styles.votationAliveCardsContainer}>
          {votationDummyDate.map((votation) => (
            <VotationAliveCard
              id={votation.id}
              key={votation.id}
              candidates={votation.candidates}
              descripion={votation.descripion}
              title={votation.title}
              start_date={votation.start_date}
              end_date={votation.end_date}
            />
          ))}
        </section>

        <h2
          className={styles.votationAliveTitle}
          style={{ marginTop: 50, marginBottom: 24 }}
        >
          Votações passadas
        </h2>

        <section className={styles.votationPassedContainer}>
          <article className={styles.votationPassedCard}>
            <div className={styles.votationPassedCardLeft}>
              <h2 className={styles.votationPassedCardTitle}>
                Eleições gerais de Angola
              </h2>
              <div className={styles.votationPassedCardCandidatesContainer}>
                <div className={styles.votationPassedCardCandidate}>
                  <div
                    className={styles.votationPassedCardCandidatePicture1}
                  ></div>
                  <button className={styles.votationPassedCardCandidateName1}>
                    Alberto Dos Santos Kitumba
                  </button>
                </div>
                <div className={styles.votationPassedCardCandidate}>
                  <div
                    className={styles.votationPassedCardCandidatePicture2}
                  ></div>
                  <button className={styles.votationPassedCardCandidateName2}>
                    Alberto Dos Santos Kitumba
                  </button>
                </div>
                <div className={styles.votationPassedCardCandidate}>
                  <div
                    className={styles.votationPassedCardCandidatePicture3}
                  ></div>
                  <button className={styles.votationPassedCardCandidateName3}>
                    Alberto Dos Santos Kitumba
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.votationPassedCardRight}>
              <span className={styles.votationPassedCardTitle}>
                Dados gerais
              </span>
              <time className={styles.votationPassedCardTime}>
                <span>Data de início: </span>{" "}
                <strong className={styles.votationPassedCardTimeDate}>
                  13.02.2004
                </strong>
              </time>
              <div className={styles.votationPassedCardPositionContainer}>
                <div className={styles.votationPassedCardPosition}>
                  <span>1º Lugar: </span>{" "}
                  <strong
                    className={styles.votationPassedCardPositionPercentage}
                  >
                    56% dos votos
                  </strong>
                </div>
                <div className={styles.votationPassedCardPosition}>
                  <span>2º Lugar: </span>{" "}
                  <strong
                    className={styles.votationPassedCardPositionPercentage}
                  >
                    24% dos votos
                  </strong>
                </div>
                <div className={styles.votationPassedCardPosition}>
                  <span>3º Lugar: </span>{" "}
                  <strong
                    className={styles.votationPassedCardPositionPercentage}
                  >
                    10% dos votos
                  </strong>
                </div>
                <div className={styles.votationPassedCardPosition}>
                  <span>Restantes: </span>{" "}
                  <strong
                    className={styles.votationPassedCardPositionPercentage}
                  >
                    10% dos votos
                  </strong>
                </div>
              </div>
              <time className={styles.votationPassedCardTime}>
                <span>Data de fim: </span>{" "}
                <strong className={styles.votationPassedCardTimeDate}>
                  13.02.2023
                </strong>
              </time>
              <span className={styles.votationPassedCardTotal}>
                Coletados votos de 1.246.700 pessoas
              </span>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default Votation;
