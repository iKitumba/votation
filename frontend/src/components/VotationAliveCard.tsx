import { ReactNode } from "react";
import styles from "./VotationAliveCard.module.css";
import Link from "next/link";

interface VotationAliveCardProps {
  children?: ReactNode;
  title: string;
  descripion: string;
  candidates: {
    name: string;
    id: string;
    avatar_url?: string;
  }[];
  start_date: string;
  end_date: string;
  id: string | number;
}

export const VotationAliveCard = ({
  title,
  descripion,
  candidates,
  start_date,
  end_date,
  id,
}: VotationAliveCardProps) => {
  return (
    <Link href={`/votation/${id}`} className={styles.votationAliveCard}>
      <strong className={styles.votationAliveCardTitle}>{title}</strong>
      <p className={styles.votationAliveCardDec}>{descripion}</p>
      <footer className={styles.votationAliveCardFooter}>
        <div className={styles.votationAliveCardFooterCandidates}>
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className={styles.votationAliveCardFooterCandidate}
            ></div>
          ))}
        </div>
        <time className={styles.startDate}>{start_date}</time>
        <time className={styles.endDate}>{end_date}</time>
      </footer>
    </Link>
  );
};
