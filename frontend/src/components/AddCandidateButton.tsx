"use client";

import { UserCirclePlus } from "@phosphor-icons/react";
import styles from "./AddCandidateButton.module.css";

export const AddCandidateButton = () => {
  return (
    <button className={styles.addCandidateButton}>
      <UserCirclePlus size={24} color="#1B1F24" />
    </button>
  );
};
