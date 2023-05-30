"use client";

import { ThumbsUp } from "@phosphor-icons/react";
import styles from "./VoteButton.module.css";

export const VoteButton = () => {
  return (
    <button className={styles.voteButton}>
      Atribuir voto <ThumbsUp size={16} color="#1B1F24" />
    </button>
  );
};
