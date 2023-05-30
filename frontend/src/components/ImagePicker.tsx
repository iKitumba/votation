"use client";

import { Camera } from "@phosphor-icons/react";
import styles from "./ImagePicker.module.css";

export const ImagePicker = () => {
  return (
    <label className={styles.imagePickerContainer}>
      <Camera size={52} color="#AED8CF" opacity={0.3} />
      <input className={styles.imagePickerInput} type="file" accept="image/*" />
    </label>
  );
};
